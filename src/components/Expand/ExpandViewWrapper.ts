import styled from "@emotion/styled";
import {Accordion} from "semantic-ui-react";

const ExpandViewWrapper = styled(Accordion)`
  & .title {
    ${(props: any) =>
    props.theme.disabled &&
    props.theme.initiallyClosed &&
    `color: rgba(40,40,40,.3) !important;`} ${(props: {
    theme: any;
}) =>
    ((props.theme.disabled && !props.theme.initiallyClosed) ||
        (props.theme.disabled && props.theme.initiallyClosed)) &&
    `cursor: default !important;;`};
  }
`;

export {ExpandViewWrapper};
