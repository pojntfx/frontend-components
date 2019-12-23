import * as React from "react";
import {CardProps} from "semantic-ui-react";
import {GalleryItemTemplate} from "./GalleryItemTemplate";
import {IGalleryItemProps} from "./Gallery";

const GalleryItem = (props: IGalleryItemProps & CardProps) => (
    <GalleryItemTemplate
        {...props}
        image={(props.image !== "/null" && props.image) || undefined}
    />
);

export {GalleryItem};
