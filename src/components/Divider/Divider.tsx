import * as React from "react";
import {DividerWrapper} from "./DividerWrapper";
import {DividerIcon} from "./DividerIcon";
import {SemanticICONS} from "semantic-ui-react/dist/commonjs/generic";

enum EDividerOffset {
    top = "top",
    bottom = "bottom"
}

interface IDividerProps {
    offset: EDividerOffset;
    title: string;
    icon: SemanticICONS;
}

const Divider = ({offset, title, icon, ...otherProps}: IDividerProps) => (
    <DividerWrapper offset={offset} horizontal {...otherProps}>
        <DividerIcon name={icon}/>
        {title}
    </DividerWrapper>
);

export {Divider};
export {IDividerProps};