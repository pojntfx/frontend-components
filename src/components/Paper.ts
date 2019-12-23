import {Segment} from "semantic-ui-react";
import styled from "@emotion/styled";

const Paper = styled(Segment)`
  margin-top: 1em !important;
  &:not(:last-child) {
    margin-bottom: 1em !important;
  }
`;

export {Paper};
