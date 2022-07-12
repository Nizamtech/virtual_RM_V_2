import styled from "styled-components";

export const List = styled.li`
  list-style: none;

  button {
    border: none;
    background: none;
  }

  &&.active {
    border-bottom: 2px solid pink;
  }
`;

export const Lists = styled.ul`
  display: flex;
`;

export const ContentStyle = styled.div`
  &&.show {
    display: block;
  }

  &&.hidden {
    display: none;
  }
`;
