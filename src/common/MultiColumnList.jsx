import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MultiColumnList = ({
  xs = 1,
  sm,
  md,
  lg,
  xl,
  items = [],
  onRenderItem = item => {},
  paddingY = 2
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
