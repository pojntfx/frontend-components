import * as React from "react";
import {Loader as LoaderTemplate} from "semantic-ui-react";

interface ILoaderProps {
    small?: boolean;
}

const Loader = ({small, ...otherProps}: ILoaderProps) =>
    small ? (
        <LoaderTemplate active inline="centered" {...otherProps} />
    ) : (
        <LoaderTemplate
            active
            inline="centered"
            content="Loading ..."
            {...otherProps}
        />
    );

export {Loader};
export {ILoaderProps};