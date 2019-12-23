import * as React from "react";
import {NoScriptWrapper} from "./NoScriptWrapper";
import {Container} from "../Container";

interface INoScriptProps {
    title: string;
    text: string;
}

const NoScript = ({title, text, ...otherProps}: INoScriptProps) => (
    <noscript {...otherProps}>
        <Container>
            <NoScriptWrapper warning icon="js" header={title} content={text}/>
        </Container>
    </noscript>
);

export {NoScript};
export {INoScriptProps};