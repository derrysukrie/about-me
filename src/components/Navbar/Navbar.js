function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="upper-section">
        <span className="title-name">
          Derry
          </span>
        {/* <span className="title-name">
            Derry
          </span> */}
      </div>
      <div className="lower-section">
        <nav className="bar">
          <a className="link" href="/">Home</a>
          <a className="link" href="/project">Project</a>
        </nav>
      </div>
      <style jsx>
        {`
          .upper-section {
            box-sizing: border-box;
            margin: 0;
            display: flex;
            justify-content: space-between;
            min-width: 0;
          }
          .navbar-wrapper {
            margin-top: 2rem;
          }
          .lower-section {
            box-sizing: border-box;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            border-bottom-color: var(--theme-ui-colors-divide,#cbd5e0);
          }
          .bar {
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .title-name {
            font-size: 2.5rem;
          }
          .link {
            padding-right: 2rem;
            color: #606063;
            text-decoration: none;
          }
          .link:hover {
            color: black;
            background: transparent !important;
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
