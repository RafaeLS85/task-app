import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid white;
  padding: 1rem ;
  margin: 1rem;
`;

export const TaskCard = ({ task }) => {
  return (
    <StyledCard>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </StyledCard>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};
