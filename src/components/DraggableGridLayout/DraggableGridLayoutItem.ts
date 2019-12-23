import styled from "@emotion/styled";

const DraggableGridLayoutItem = styled("div")`
  height: 100%;
  width: 100%;
  /* Make space for react-grid-layout structure */
  & > div {
    height: 100%;
    width: 100%;
  }
`;

export {DraggableGridLayoutItem};
