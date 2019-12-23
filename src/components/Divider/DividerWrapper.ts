import {Divider} from "semantic-ui-react";
import styled from "@emotion/styled";

const DividerWrapper = styled(Divider)`
  margin-${(props: any) => {
    switch (props.offset) {
        case "top":
            return "top";
        case "bottom":
            return "bottom";
        default:
            return "top";
    }
}}: 2em!important;
`;

export {DividerWrapper};
