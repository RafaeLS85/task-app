import PropTypes from "prop-types";
import { BiErrorCircle } from "react-icons/bi";
import styled from "styled-components";

const StyledErrorContainer = styled.div`
    border: 1px dotted white;
    padding: 1rem ;
    margin: 1rem;
`

export const Error = ({ errors }) => {
  return (
    <StyledErrorContainer>
      <h1 className="error-icon">
        <BiErrorCircle size={35} style={{ verticalAlign: 'bottom' }}/> Error:
      </h1>
      <pre>{JSON.stringify(errors)}</pre>
    </StyledErrorContainer>
  );
};

Error.propTypes = {
  errors: PropTypes.object,
};
