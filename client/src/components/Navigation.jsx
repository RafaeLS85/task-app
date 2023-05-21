import { Link } from "react-router-dom";
import styled from "styled-components";
import { GrFormAdd } from 'react-icons/gr'

const StyledNavBar = styled.nav`
  display: flex;
  gap: 2rem;
  background-color: #f3f6f4;
  padding: 1rem ;
  cursor: pointer;
  color:  black;
  font-size: 2rem ;
  font-weight: bold ;
  justify-content: center ;
  align-items: center ;
`;

const Button = styled.div`
    background-color: #2986cc ;
    color: white;
    border-radius: 5px ;
    padding: 0.5rem ;
`

export const Navigation = () => {
  return (
    <StyledNavBar>
      <Link to="/tasks">Tasks App</Link>
      <Button>
        <Link to="/tasks-create"><GrFormAdd size={35} style={{ verticalAlign: 'bottom'}} className="icon" /></Link>
      </Button>
    </StyledNavBar>
  );
};
