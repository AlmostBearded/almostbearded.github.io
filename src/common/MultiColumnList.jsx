// @flow
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import type { Node } from "react";
import type { BSColSize, BSSpacingSize } from "../common/BootstrapTypes.js";

const MultiColumnList = ({
  xs = 1,
  sm,
  md,
  lg,
  xl,
  items = [],
  onRenderItem = item => null,
  paddingY = 2
}: {
  xs?: BSColSize,
  sm?: BSColSize,
  md?: BSColSize,
  lg?: BSColSize,
  xl?: BSColSize,
  items: any[],
  onRenderItem: any => Node,
  paddingY?: BSSpacingSize
}) => (
  <Row>
    {items.map((item, index) => (
      <Col
        key={index}
        {...(xs && { xs: xs })}
        {...(sm && { sm: sm })}
        {...(md && { md: md })}
        {...(lg && { lg: lg })}
        {...(xl && { xl: xl })}
        className={`py-${paddingY}`}
      >
        {onRenderItem(item)}
      </Col>
    ))}
  </Row>
);

export default MultiColumnList;
