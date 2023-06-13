import store from './redux/store';
import { previousColorAction, nextColorAction, randomColorAction } from './redux/actions/actionCreators';

const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const randomBtn = document.getElementById('random-btn');

previousBtn.addEventListener('click', () => {
  store.dispatch(previousColorAction());
});

nextBtn.addEventListener('click', () => {
  store.dispatch(nextColorAction());
});

randomBtn.addEventListener('click', () => {
  store.dispatch(randomColorAction());
});

store.subscribe(() => {
  const {
    colorReducer: {
      colors,
      index
    }
  } = store.getState();

  const wrapper = document.getElementById('wrapper');
  const value = document.getElementById('value');

  wrapper.style.backgroundColor = colors[index];
  value.innerHTML = colors[index];
});
