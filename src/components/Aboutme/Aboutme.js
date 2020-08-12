/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react';

import './aboutme.scss';

const toxicity = require('@tensorflow-models/toxicity');

const string = `
I'm Derry - currently working at Woobiz as a Frontend Engineer,
Exploring Frontend stack like NextJS, Typescript and lil bit
React Native too. I liked to make something from zero to hero, it
feels like driving a truck in the mountain roads.
`;
const threshold = 0.9;

function Aboutme() {
  useEffect(() => {
    toxicity.load(threshold).then((model) => {
      const sentences = string;

      model.classify(sentences).then((predictions) => {
        // `predictions` is an array of objects, one for each prediction head,
        // that contains the raw probabilities for each input along with the
        // final prediction in `match` (either `true` or `false`).
        // If neither prediction exceeds the threshold, `match` is `null`.

        console.log(predictions);
        /*
        prints:
        {
          "label": "identity_attack",
          "results": [{
            "probabilities": [0.9659664034843445, 0.03403361141681671],
            "match": false
          }]
        },
        {
          "label": "insult",
          "results": [{
            "probabilities": [0.08124706149101257, 0.9187529683113098],
            "match": true
          }]
        },
        ...
         */
      });
    });
  }, []);
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
