import React from "react";
import { Spinner, Button } from "react-bootstrap";

const Loading = () => {
  return (
    <>
      <div style={{ height: "100vh", position: "relative" }}>
        <div
          style={{
            margin: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            msTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              style={{ width: "100px", height: "100px" }}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Loading;
