/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Link from 'next/link';

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
      <Link href="//pokemon-app-eight.vercel.app/">
        <div className="aboutme__pokemon-link"> See my Pokemon App</div>
      </Link>
    </div>
  );
}

export default Aboutme;
