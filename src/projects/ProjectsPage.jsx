// @flow
import React from "react";
import { Link } from "react-navi";
import MultiColumnList from "../common/MultiColumnList";
import pinRacer from "./pin-racer/project";
import seedsOfSol from "./seeds-of-sol/project";

const ProjectsPage = () => (
  <div>
    <h1 className="display-1 text-center">Projects</h1>
    <hr className="mt-3 mb-4" />
    <MultiColumnList
      xs={1}
      sm={2}
      md={3}
      items={[
        <Link href="./pin-racer">
          <img src={pinRacer.thumbnail} alt={`${pinRacer.title} Thumbnail`} />
        </Link>,
        <Link href="./seeds-of-sol">
          <img
            src={seedsOfSol.thumbnail}
            alt={`${seedsOfSol.title} Thumbnail`}
          />
        </Link>
      ]}
    />
  </div>
);

export default ProjectsPage;
