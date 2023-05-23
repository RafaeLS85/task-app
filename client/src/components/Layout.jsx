import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
   display: flex;
   flex-direction: column ;
  /* justify-content: flex-start; */
  /* flex-wrap: wrap; */
  /* width: 100vw ; */
  margin: 2rem;
  padding: 2rem;

`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

Layout.propTypes = {
  children: PropTypes.node,
};
