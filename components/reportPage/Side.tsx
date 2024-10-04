"use client";
import React from "react";
import Upper from "./Upperside";
import { Container } from "react-bootstrap";
import Bottom from "./BottomSide";
const Side = () => {
  return (
    <Container className="">
      <Upper />
      <Bottom />
    </Container>
  );
};

export default Side;
