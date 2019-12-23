import * as React from "react";
import {HorizontalScrollSegment} from "../HorizontalScrollSegment";
import {Help, IHelp} from "../Help/Help";
import {ActionBarButton} from "./ActionBarButton";
import {ActionBarInput} from "./ActionBarInput";

interface IActionBarProps {
    create: {
        title: string;
        icon: string;
        onCreate(): any;
        disabled: boolean;
        help: IHelp;
    };
    search: {
        text: string;
        icon: string;
        value: string;
        onSearch(): any;
        disabled: boolean;
        help: IHelp;
    };
}

const ActionBar = ({create, search, ...otherProps}: IActionBarProps) => (
    <HorizontalScrollSegment {...otherProps}>
        <Help {...create.help}>
            <ActionBarButton
                icon={create.icon}
                content={create.title}
                onClick={create.onCreate}
                disabled={create.disabled}
            />
        </Help>
        <Help {...search.help}>
            <ActionBarInput
                action={{
                    icon: search.icon,
                    onClick: search.onSearch,
                    disabled: search.disabled
                }}
                placeholder={search.text}
                onChange={search.onSearch}
                value={search.value}
                disabled={search.disabled}
            />
        </Help>
    </HorizontalScrollSegment>
);

export {ActionBar};
export {IActionBarProps};