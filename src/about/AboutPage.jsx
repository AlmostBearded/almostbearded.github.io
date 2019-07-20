// @flow
import React from "react";
import Container from "react-bootstrap/Container";
import ContactForm from "./ContactForm";
import MultiColumnList from "../common/MultiColumnList";
import competencies from "./competencies/competencies.json";
import Competency from "./competencies/Competency";
import Content from "./AboutContent.mdx";
import peter from "../assets/images/peter.webp";

const AboutPage = () => {
  return (
    <div>
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
                lg={3}
                items={category.competencies
                  .sort((a, b) => b.level - a.level)
                  .map(v => (
                    <Competency name={v.name} level={v.level} />
                  ))}
                paddingY={2}
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
    </div>
  );
};

export default AboutPage;
