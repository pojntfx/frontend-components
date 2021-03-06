import * as React from "react";
import {LegalTextWrapper} from "./LegalTextWrapper";
import {LegalCode} from "./LegalCode";
import {ILegalTextProps} from "../Footer";

const LegalText = ({children, ...otherProps}: ILegalTextProps) => (
    <LegalTextWrapper {...otherProps}>
        <LegalCode>{children}</LegalCode>
    </LegalTextWrapper>
);

export {LegalText};
