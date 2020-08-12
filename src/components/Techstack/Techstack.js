import React from 'react';
import './techstack.scss';

function Techstack() {
  return (
    <div className="techstack">
      <div className="techstack_title-wrap">
        <span className="techstack_title">Technology Stack</span>
        {/* <div className="d-flex justify-content-start pt-4"> */}

        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-4">
                <div className="techstack__card">
                  <img
                    src="images/javascript.svg"
                    className="rounded"
                    alt="logos"
                    width="120"
                  />
                  <div className="text-center pt-3 font-weight-bold">
                    <span>Javascript</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-5">
                <div className="techstack__card">
                  <img
                    src="images/typescript.svg"
                    className="rounded"
                    alt="logos"
                    width="120"
                  />
                  <div className="text-center pt-3 font-weight-bold">
                    <span>Typescript</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-5">
                <div className="techstack__card">
                  <img
                    src="images/react.svg"
                    className="rounded"
                    alt="logos"
                    width="120"
                  />
                  <div className="text-center pt-3 font-weight-bold">
                    <span>ReactJS</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-5">
                <div className="techstack__card">
                  <img
                    src="images/redux.svg"
                    className="rounded"
                    alt="logos"
                    width="125"
                  />
                  <div className="text-center pt-3 font-weight-bold">
                    <span>Redux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techstack;
