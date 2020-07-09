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
          <span className="link-wrapper">
            <a className="link" href="/">Home</a>
          </span>
          <span>
            <a className="link" href="/project">Project</a>
          </span>
        </nav>
        <nav className="bar">
          <span className="link-wrapper">
            <a className="link" href="/">Twitter</a>
          </span>
          <span>
            <a className="link" href="/project">Instagram</a>
          </span>
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
            margin-bottom: 6rem;
          }
          .lower-section {
            box-sizing: border-box;
            border-bottom-style: solid;
            display: flex;
            border-bottom-width: 1px;
            justify-content: space-between;
            border-bottom-color: var(--theme-ui-colors-divide,#cbd5e0);
          }
          .bar {
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .title-name {
            font-size: 2.5rem;
            font-weight: 600;
          }
          .link-wrapper {
            padding-right: 2rem;
          }
          .link {
            color: #606063;
            text-decoration: none;
          }
          .link:hover {
            color: black;
            background: transparent !important;
            text-decoration: underline;
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
