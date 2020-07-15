import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <div className="container">
      <main>
        {children}
      </main>
      <style jsx>{`
        .container {
          box-sizing: border-box;
          margin: 0;
          min-width: 0;
          width: 100%;
          height: 100vh;
          max-width: container;
          margin-left: auto;
          margin-right: auto;
          padding: 1rem;
          max-width: 1024px;
        }
      `}</style>
    </div>
  );
};

export default DefaultLayout;
