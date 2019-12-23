import * as React from "react";
import {Grid, SemanticICONS} from "semantic-ui-react";
import {AppMenuButton} from "./AppMenuButton";
import {AppMenuSearchInput} from "./AppMenuSearchInput";
import {Help, IHelp} from "../Help/Help";
import {IActionBarProps} from "../ActionBar/ActionBar";

interface IAppMenuProps {
    apps: IAppButtonProps[];
    search: IActionBarProps["search"];

    linkComponent(
        to: IAppButtonProps["link"],
        children: JSX.Element
    ): JSX.Element;
}

interface IAppButtonProps {
    title: string;
    icon: SemanticICONS;
    link: string;
    disabled?: boolean;
    help: IHelp;
    linkComponent: IAppMenuProps["linkComponent"];
}

interface IAppButtonContentProps {
    title: IAppButtonProps["title"];
    icon: IAppButtonProps["icon"];
    link: IAppButtonProps["link"];
}

const AppMenu = ({
                     search,
                     apps,
                     linkComponent,
                     ...otherProps
                 }: IAppMenuProps) => (
    <>
        <Help {...search.help}>
            <AppMenuSearchInput
                action={{
                    icon: search.icon,
                    onClick: search.onSearch,
                    disabled: search.disabled
                }}
                placeholder={search.text}
                onChange={search.onSearch}
                value={search.value}
                disabled={search.disabled}
                fluid
            />
        </Help>
        <Grid columns={5} doubling stackable {...otherProps}>
            <Grid.Row>
                {apps.map((app, index) => (
                    <Grid.Column key={index}>
                        <AppMenuButton linkComponent={linkComponent} {...app} />
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    </>
);

export {AppMenu};
export {IAppButtonContentProps};
export {IAppButtonProps};
export {IAppMenuProps};