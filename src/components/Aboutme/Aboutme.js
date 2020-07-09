function Aboutme() {
  return (
    <div>
      <div className="welcome-title">
        Hello there 👋
      </div>
      <div className="about-me">
        I'm Derry - currently working at Woobiz as a Frontend Engineer,
        Exploring Frontend stack like NextJS, Typescript and lil bit
        React Native too. I liked to make something from zero to hero, it
        feels like riding a truck in mountain roads.
      </div>
    <style jsx>{`
      .welcome-title{
        font-size: 3rem;
        font-weight: 600;
      }
      .about-me {
        font-size: 1.6rem;
        margin-top: 1.5rem;
      }
    `}</style>
    </div>
  )
}

export default Aboutme;
