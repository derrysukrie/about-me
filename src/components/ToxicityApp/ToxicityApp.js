/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import './toxicity-app.scss';
import DefaultLayout from 'src/layout/DefaultLayout';

const toxicity = require('@tensorflow-models/toxicity');

const threshold = 0.9;

function ToxicityApp() {
  const [words, setWords] = useState('');
  const [loading, setLoading] = useState(false);
  const [indentity_attack, setIdentityAttack] = useState(null);
  const [insult, setInsult] = useState(null);
  const [obscene, setObscene] = useState(null);
  const [severe_toxicity, setSevereToxicity] = useState(null);
  const [sexual_explicit, setSexualExplicit] = useState(null);
  const [threat, setThreat] = useState(null);
  const [toxicityy, setToxicity] = useState('');

  // eslint-disable-next-line consistent-return
  const onSubmit = () => {
    if (words === '') return null;
    setLoading(true);
    toxicity.load(threshold).then((model) => {
      const sentences = [words];
      model.classify(sentences).then((predictions) => {
        // `predictions` is an array of objects, one for each prediction head,
        // that contains the raw probabilities for each input along with the
        // final prediction in `match` (either `true` or `false`).
        // If neither prediction exceeds the threshold, `match` is `null`.
        setIdentityAttack(predictions[0].results[0].match);
        setInsult(predictions[1].results[0].match);
        setObscene(predictions[2].results[0].match);
        setSevereToxicity(predictions[3].results[0].match);
        setSexualExplicit(predictions[4].results[0].match);
        setThreat(predictions[5].results[0].match);
        setToxicity(predictions[6].results[0].match);

        if (predictions !== null) setLoading(false);
      });
    });
  };

  return (
    <DefaultLayout>
      <div className="d-flex flex-column justify-content-start">
        <div>
          <input
            type="text"
            value={words}
            onChange={(e) => setWords(e.target.value)}
            className="input__field"
            placeholder="Input text here..."
          />
        </div>
        <div className="mt-3">
          <button onClick={onSubmit} type="button" className="primary-app-btn">
            Test
          </button>
        </div>
      </div>
      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border  text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table table-bordered mt-5">
          <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col-2">Type</th>
              <th scope="col-2">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>Identity Attack</td>
              <td>
                {indentity_attack === true ? (
                  <img
                    src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
                    alt="icon"
                    width="20"
                  />
                ) : indentity_attack === true ? (
                  <img
                    src="https://img.icons8.com/fluent/48/000000/close-window.png"
                    alt="icon"
                    width="20"
                  />
                ) : null}
              </td>
            </tr>
            <tr className="text-center">
              <td>Insult</td>
              <td>
                {insult === true ? (
                  <img
                    src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
                    alt="icon"
                    width="20"
                  />
                ) : insult === false ? (
                  <img
                    src="https://img.icons8.com/fluent/48/000000/close-window.png"
                    alt="icon"
                    width="20"
                  />
                ) : null}
              </td>
            </tr>
            <tr className="text-center">
              <td>Obscene</td>
              <td>
                {obscene === true ? (
                  <img
                    src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
                    alt="icon"
                    width="20"
                  />
                ) : obscene === false ? (
                  <img
                    src="https://img.icons8.com/fluent/48/000000/close-window.png"
                    alt="icon"
                    width="20"
                  />
                ) : null}
              </td>
            </tr>
            <tr className="text-center">
              <td>Severe Toxicity</td>
              <td>
                {severe_toxicity === true ? (
                  <img
                    src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
                    alt="icon"
                    width="20"
                  />
                ) : severe_toxicity === false ? (
                  <img
                    src="https://img.icons8.com/fluent/48/000000/close-window.png"
                    alt="icon"
                    width="20"
                  />
                ) : null}
              </td>
            </tr>
            <tr className="text-center">
              <td>Sexual Explicit</td>
              <td>
                {sexual_explicit === true ? (
                  <img
                    src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
                    alt="icon"
                    width="20"
                  />
                ) : sexual_explicit === false ? (
                  <img
                    src="https://img.icons8.com/fluent/48/000000/close-window.png"
                    alt="icon"
                    width="20"
                  />
                ) : null}
              </td>
            </tr>
            <tr className="text-center">
              <td>Threat</td>
              <td>
                {threat === true ? (
                  <img
                    src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
                    alt="icon"
                    width="20"
                  />
                ) : threat === false ? (
                  <img
                    src="https://img.icons8.com/fluent/48/000000/close-window.png"
                    alt="icon"
                    width="20"
                  />
                ) : null}
              </td>
            </tr>
            <tr className="text-center">
              <td>Toxicity</td>
              <td>
                {toxicityy === true ? (
                  <img
                    src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
                    alt="icon"
                    width="20"
                  />
                ) : toxicityy === false ? (
                  <img
                    src="https://img.icons8.com/fluent/48/000000/close-window.png"
                    alt="icon"
                    width="20"
                  />
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </DefaultLayout>
  );
}

export default ToxicityApp;
