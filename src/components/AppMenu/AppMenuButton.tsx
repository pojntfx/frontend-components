import * as React from "react";
import {Help} from "..";
import {AppMenuButtonContent} from "./AppMenuButtonContent";
import {IAppButtonProps} from "./AppMenu";

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
