import * as React from "react";
import {CardProps} from "semantic-ui-react";
import {CoverflowItemTemplate} from "./CoverflowItemTemplate";
import {ICoverflowItemProps} from "./Coverflow";

const CoverflowItem = (props: ICoverflowItemProps & CardProps) => (
    <CoverflowItemTemplate
        {...props}
        image={(props.image !== "/null" && props.image) || undefined}
    />
);

export {CoverflowItem};
