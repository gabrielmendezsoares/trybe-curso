import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

describe('App general tests', () => {
  test('Renders App component', () => {
    render(<App />);

    const jokeMessage = screen.getByTestId('joke-message');
    const jokeButton = screen.getByTestId('joke-button');

    expect(jokeMessage).toBeInTheDocument();
    expect(jokeButton).toBeInTheDocument();
  });

  test('Fetch jokes API', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    jest.spyOn(global, 'fetch');

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke)
    });

    render(<App />);

    const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');

    expect(renderedJoke).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } }
    );
  });

  test('Fetch a new joke from API', async () => {
    const jokeA = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    const jokeB = {
      id: '7h3oGtrOfxc',
      joke: 'What is red and smells like blue paint? Red paint!',
      status: 200,
    };

    jest.spyOn(global, 'fetch');

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(jokeA)
    });

    render(<App />);

    const jokeButton = await screen.findByTestId('joke-button');
    const renderedJokeA = await screen.findByText('Whiteboards ... are remarkable.');
    const queryJokeB = screen.queryByText(jokeB.joke);

    expect(renderedJokeA).toBeInTheDocument();
    expect(queryJokeB).not.toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } }
    );

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(jokeB)
    });

    userEvent.click(jokeButton);

    const renderedJokeB = await screen.findByText(jokeB.joke);
    const queryJokeA = screen.queryByText(jokeA.joke);

    expect(queryJokeA).not.toBeInTheDocument();
    expect(renderedJokeB).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(2);
    expect(global.fetch).toBeCalledWith(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } }
    );
  });
});
