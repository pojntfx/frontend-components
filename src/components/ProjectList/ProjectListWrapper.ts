import styled from "@emotion/styled";

const ProjectListWrapper = styled("div")`
  display: flex;
  align-items: center;
  overflow-x: auto;
  &::after {
    content: "";
    padding: 0.1em;
  }
`;

export { ProjectListWrapper };
