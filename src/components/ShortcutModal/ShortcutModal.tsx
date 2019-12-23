import * as React from "react";
import {ShortcutModalProvider} from "./ShortcutModalProvider";
import {ShortcutModalView} from "./ShortcutModalView";
import {ModalProps} from "semantic-ui-react";
import {IHelp} from "../Help/Help";

interface IShortcutModalViewProps {
    title: string;
    shortcuts: IShortcutGroup[];
    modalIsOpen?: boolean;
    trigger?: ModalProps["trigger"];
    help: IHelp;

    toggleModal?(event: any): any;
}

interface IShortcutModalProviderProps {
    triggerKey: string;

    children(props: IShortcutModalShortcutProviderChildrenProps): JSX.Element;
}

interface IShortcutModalShortcutProviderChildrenProps {
    modalIsOpen?: IShortcutModalViewProps["modalIsOpen"];

    toggleModal?(event: any): any;
}

interface IShortcutModalProps {
    children: JSX.Element;
    triggerKey: IShortcutModalProviderProps["triggerKey"];
    title: IShortcutModalViewProps["title"];
    shortcuts: IShortcutModalViewProps["shortcuts"];
    help: IShortcutModalViewProps["help"];
}

interface IShortcutGroup {
    title: string;
    shortcuts: IShortcut[];
}

interface IShortcut {
    title: string;
    keys: string[];
}

const ShortcutModal = ({
                           triggerKey,
                           children,
                           ...otherProps
                       }: IShortcutModalProps) => (
    <ShortcutModalProvider triggerKey={triggerKey}>
        {({modalIsOpen, toggleModal}: any) => (
            <>
                {children}
                <ShortcutModalView
                    modalIsOpen={modalIsOpen}
                    toggleModal={toggleModal}
                    {...otherProps}
                />
            </>
        )}
    </ShortcutModalProvider>
);

export {ShortcutModal};
export {IShortcutModalProps};
export {IShortcutModalProviderProps};
export {IShortcutModalViewProps};