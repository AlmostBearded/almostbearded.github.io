// @flow
import React from "react";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ContactForm from "./ContactForm";
import MultiColumnList from "../common/MultiColumnList";
import Content from "./AboutContent.mdx";
import competencyLevels from "../assets/competencies/competencyLevels.json";
import competencies from "../assets/competencies/competencies.json";
import peter from "../assets/images/peter.webp";

const AboutPage = () => {
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
      <h1 className="display-1 text-center">About Me</h1>
      <hr className="mt-3 mb-4" />
      <Container>
        <img
          src={peter}
          alt="Peter Oberrauner"
          className="float-sm-right ml-3 mb-3"
          style={{ maxWidth: "200px" }}
        />
        <Content />
      </Container>
      <hr className="my-4" />
      <h2 className="display-2 text-center mb-4">Skills</h2>
      <Container className="text-center">
        {competencies.map(category => (
          <div key={category.name}>
            <h4 className="display-4 text-center">{category.name}</h4>
            <div className="pb-5">
              <MultiColumnList
                xs={12}
                sm={6}
                md={4}
                lg={1}
                items={category.competencies.sort((a, b) => b.level - a.level)}
                onRenderItem={renderCompetency}
              />
            </div>
          </div>
        ))}
      </Container>

      <hr className="my-4" />
      <h2 className="display-2 text-center mb-4">Contact</h2>
      <Container className="mb-5">
        <ContactForm />
      </Container>
    </Container>
  );
};

export default AboutPage;
