import styled from "styled-components";
import { BsFill0CircleFill } from "react-icons/bs";

export const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;

  &:hover {
    background-color: aqua;
  }



  /* p {
    font-size: 20px;
    color: green;
  } */
`;

export const Status = styled.p`
  font-size: 20px;
  color: ${(props) => (props.status === "online" ? "green" : "red")};
  /* color: "green"; */
`;

export const Link = styled.a`
  color: red;
  font-size: 20px;
`;

export const Link2 = styled(Link)`
  text-decoration: line-through;
`;
