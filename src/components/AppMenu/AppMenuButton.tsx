import * as React from "react";
import {AppMenuButtonContent} from "./AppMenuButtonContent";
import {IAppButtonProps} from "./AppMenu";
import {Help} from "../..";

const AppMenuButton = ({
                           title,
                           icon,
                           help,
                           link,
                           linkComponent,
                           ...otherProps
                       }: IAppButtonProps) => (
    <Help {...help}>
        {linkComponent(
            link,
            <AppMenuButtonContent
                title={title}
                icon={icon}
                link={link}
                {...otherProps}
            />
        )}
    </Help>
);

export {AppMenuButton};
