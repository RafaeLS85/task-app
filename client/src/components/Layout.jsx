import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin: 2rem;
  padding: 2rem;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

Layout.propTypes = {
  children: PropTypes.node,
};
