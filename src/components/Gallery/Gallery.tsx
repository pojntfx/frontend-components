import * as React from "react";
import {GalleryWrapper} from "./GalleryWrapper";
import {GalleryItem} from "./GalleryItem";
import {CardProps} from "semantic-ui-react";

interface IGalleryProps {
    items: IGalleryItemProps[] & CardProps;
    linkComponent: JSX.Element;
}

interface IGalleryItemProps {
    link?: string;
}

const Gallery = ({items, linkComponent, ...otherProps}: IGalleryProps) => (
    <GalleryWrapper options={{gutter: 30}} {...otherProps}>
        {items.map(({link, ...props}, index) => (
            <GalleryItem {...props} as={linkComponent} to={link} key={index}/>
        ))}
    </GalleryWrapper>
);

export {Gallery, GalleryItem};
export {IGalleryItemProps};
export {IGalleryProps};