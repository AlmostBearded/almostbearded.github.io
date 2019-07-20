// @flow
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import competencyLevels from "./competency-levels.json";

const Competency = ({ level, name }: { level: number, name: string }) => {
  const progress = 100 * (level / competencyLevels.length);
  return (
    <div>
      <span>{name}</span>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>{competencyLevels[level - 1]}</Tooltip>}
      >
        <ProgressBar
          now={progress}
          label={competencyLevels[level - 1]}
          variant="info"
          srOnly
          striped
        />
      </OverlayTrigger>
    </div>
  );
};

export default Competency;
