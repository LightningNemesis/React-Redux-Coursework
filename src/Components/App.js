import "bulma/css/bulma.css";

import ProfileCard from "./ProfileCard";
import AlexaImg from "../images/alexa.png";
import CortanaImg from "../images/cortana.png";
import SiriImg from "../images/siri.png";

function App() {
  const inputType = "number";
  const minVal = 5;

  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <p class="title">Personal Digital Assistants</p>
          <p class="subtitle">a synopsis</p>
        </div>
      </div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                logo={SiriImg}
                title={"Siri"}
                twitterHandle={"@apple.siri"}
                description={"A brief description about Siri and what she does"}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                logo={AlexaImg}
                title={"Alexa"}
                twitterHandle={"@amazon.alexa"}
                description={
                  "A brief description about Alexa and what she does"
                }
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                logo={CortanaImg}
                title={"Cortana"}
                twitterHandle={"@microsoft.cortana"}
                description={
                  "A brief description about Cortana and what she does"
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
