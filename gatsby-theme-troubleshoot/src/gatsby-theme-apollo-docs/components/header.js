import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import {HEADER_HEIGHT} from "../utils";
import {breakpoints} from "gatsby-theme-apollo-core";

const Wrapper = styled.header({
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 1
});

const InnerWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  height: HEADER_HEIGHT,
  padding: "0 56px",
  backgroundColor: "white",
  [breakpoints.md]: {
    padding: "0 24px"
  },
  marginTop: 20
});

export default function Header(props) {
  return (
    <Wrapper>
      <InnerWrapper>{props.children}</InnerWrapper>
    </Wrapper>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired
};
