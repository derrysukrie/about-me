/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
// import './aboutme.scss';

const string = `
I'm Derry - currently working at Woobiz as a Frontend Engineer,
Exploring Frontend stack like NextJS, Typescript, Storybook, React
Query and Apollo GraphQL. I'm also experienced building E-commerce web application with
latest Frontend technology stack
`;

function Aboutme() {
  return (
    <div className="aboutme">
      <span role="img" className="aboutme__welcome-title">
        Hello there 👋
      </span>
      <div className="aboutme__intro">{string}</div>
    </div>
  );
}

export default Aboutme;
