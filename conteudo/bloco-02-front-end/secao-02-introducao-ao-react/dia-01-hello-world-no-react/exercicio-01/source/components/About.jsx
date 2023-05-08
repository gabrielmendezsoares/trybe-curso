import React from 'react';

const name = 'Gabriel Mendez Soares';
const description = 'Developer';
const firstSkill = 'JavaScript';
const secondSkill = 'React';
const thirdSkill = 'Jest';

class About extends React.Component {
  render () {
    return (
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>Skills</h2>
        <ul>
          <li>{firstSkill}</li>
          <li>{secondSkill}</li>
          <li>{thirdSkill}</li>
        </ul>
      </div>
    );
  }
}

export default About;
