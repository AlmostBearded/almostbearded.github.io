import React from "react";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Helmet from "react-helmet";
import ContactForm from "../components/contact-form/ContactForm";
import MultiColumnList from "../components/multi-column-list/MultiColumnList";
import competencyLevels from "../assets/competencies/competencyLevels.json";
import competencies from "../assets/competencies/competencies.json";
import peter from "../assets/images/peter.webp";

const About = () => {
  const renderCompetency = c => {
    const progress = 100 * (c.level / competencyLevels.length);
    return (
      <div>
        <span>{c.name}</span>
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>{competencyLevels[c.level - 1]}</Tooltip>}
        >
          <ProgressBar
            now={progress}
            label={competencyLevels[c.level - 1]}
            variant="info"
            srOnly
            striped
          />
        </OverlayTrigger>
      </div>
    );
  };

  return (
    <Container>
      <Helmet>
        <title>About AlmostBearded</title>
        <meta
          name="description"
          content="Details about Peter Oberrauner, his work, his background and how you can get in contact with him."
        />
      </Helmet>
      <h1 className="display-1 text-center">About Me</h1>
      <hr className="mt-3 mb-4" />
      <Container>
        <img
          src={peter}
          alt="Peter Oberrauner"
          className="float-sm-right ml-3 mb-3"
          style={{ maxWidth: "200px" }}
        />
        <p>
          My name is Peter Oberrauner. I am a software engineer currently
          employed as a frontend web developer at{" "}
          <a href="https://codefluegel.com/en/">CodeFlügel</a> and finishing my
          Master's degree in software engineering and management on the{" "}
          <a href="https://www.tugraz.at/en/home/">
            Graz University of Technology
          </a>
          . I have previously worked as a game developer at{" "}
          <a href="http://rarebyte.com/">Rarebyte</a> and have varying levels of
          experience in many major game engines/frameworks and am very
          comfortable with writing efficient code for all layers of a game.
        </p>
        <p>
          I am very passionate about clean code and efficient workflows and also
          consider myself a lifelong learner that's decently quick in picking up
          on new technologies. The trait that defines me the most is my love for
          games and game development but I also greatly enjoy programming and
          designing solutions that bring enjoyment and value to their users.
        </p>
        {/* 
      Todo: Add Accomplishments 
    */}
        <p>
          Most of my time at the moment is spent on my employment, my university
          study and various side projects but I am always open for interesting
          projects as long as their schedule allows for enough flexibility to
          fit with my other responsibilities. You can simply contact me via{" "}
          <a href="mailto:thealmostbearded@gmail.com">
            thealmostbearded@gmail.com
          </a>{" "}
          or via the form below and we can discuss the details.
        </p>
      </Container>
      <hr className="my-4" />
      <h2 className="display-4 text-center mb-4">Skills</h2>
      <Container className="text-center">
        {competencies.map(category => (
          <div key={category.name}>
            <h5>{category.name}</h5>
            <div className="pb-5">
              <MultiColumnList
                xs={12}
                sm={6}
                md={4}
                lg={3}
                items={category.competencies}
                onRenderItem={renderCompetency}
                paddingY={2}
              />
            </div>
          </div>
        ))}
      </Container>

      <hr className="my-4" />
      <h2 className="display-4 text-center mb-4">Contact</h2>
      <Container>
        <ContactForm />
      </Container>
    </Container>
  );
};

export default About;
