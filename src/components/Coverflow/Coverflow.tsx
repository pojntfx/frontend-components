import * as React from "react";
import {CoverflowWrapper} from "./CoverflowWrapper";
import {CoverflowItem} from "./CoverflowItem";
import {CardProps} from "semantic-ui-react";

interface ICoverflowProps {
    items: ICoverflowItemProps[] & CardProps;
    linkComponent: JSX.Element;
}

interface ICoverflowItemProps {
    link?: string;
}

const Coverflow = ({
                       items,
                       linkComponent,
                       ...otherProps
                   }: ICoverflowProps) => (
    <CoverflowWrapper rotate={10} {...otherProps}>
        {items.map(({link, ...props}, index) => (
            <CoverflowItem {...props} as={linkComponent} to={link} key={index}/>
        ))}
    </CoverflowWrapper>
);

export {Coverflow, CoverflowItem};
export {ICoverflowItemProps};
export {ICoverflowProps};