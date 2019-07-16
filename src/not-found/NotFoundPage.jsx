import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-navi";

const NotFoundPage = () => (
  <Container>
    <h1 className="display-1 text-center">Page Not Found</h1>
    <hr className="mt-3 mb-4" />
    <div className="w-100 text-center">
      It's dangerous to go here! Take <Link href="/">this!</Link>
    </div>
  </Container>
);

export default NotFoundPage;
