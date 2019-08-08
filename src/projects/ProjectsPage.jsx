// @flow
import React from "react";
import { Link } from "react-navi";
import MultiColumnList from "../common/MultiColumnList";
import pinRacer from "./pin-racer/project";
import seedsOfSol from "./seeds-of-sol/project";
import battlegrounds from "./battlegrounds/project";

const ProjectsPage = () => (
  <div>
    <h1 className="display-1 text-center">Projects</h1>
    <hr className="mt-3 mb-4" />
    <MultiColumnList
      xs={12}
      sm={6}
      md={4}
      items={[
        <div>
          <Link href="./pin-racer">
            <img
              src={pinRacer.thumbnail}
              alt={`${pinRacer.title} Thumbnail`}
              className="w-100"
            />
          </Link>
          <div className="px-1 pt-2">
            <Link href="./pin-racer">
              <h4 className="text-dark">{pinRacer.title}</h4>
            </Link>
            <p className="text-muted">{pinRacer.tagline}</p>
          </div>
        </div>,
        <div>
          <Link href="./seeds-of-sol">
            <img
              src={seedsOfSol.thumbnail}
              alt={`${seedsOfSol.title} Thumbnail`}
              className="w-100"
            />
          </Link>
          <div className="px-1 pt-2">
            <Link href="./seeds-of-sol">
              <h4 className="text-dark">{seedsOfSol.title}</h4>
            </Link>
            <p className="text-muted">{seedsOfSol.tagline}</p>
          </div>
        </div>,
        <div>
          <Link href="./battlegrounds">
            <img
              src={battlegrounds.thumbnail}
              alt={`${battlegrounds.title} Thumbnail`}
              className="w-100"
            />
          </Link>
          <div className="px-1 pt-2">
            <Link href="./battlegrounds">
              <h4 className="text-dark">{battlegrounds.title}</h4>
            </Link>
            <p className="text-muted">{battlegrounds.tagline}</p>
          </div>
        </div>
      ]}
    />
  </div>
);

export default ProjectsPage;
