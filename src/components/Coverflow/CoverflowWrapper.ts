import styled from "@emotion/styled";
import * as Coverflow from "reactjs-coverflow";
import {ComponentClass} from "react";

const CoverflowWrapper = styled(Coverflow as ComponentClass<ICoverflowProps>)`
  margin-top: 1em;
  margin-bottom: 1em;
  background: transparent;
`;

export {CoverflowWrapper};
