import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import {IShortcutModalProviderProps, IShortcutModalViewProps, ShortcutModal} from "./ShortcutModal/ShortcutModal";
import {Head, IHeadProps} from "./Head";
import {INavbarProps, Navbar} from "./Navbar/Navbar";
import {Container} from "./Container";
import {Footer, IFooterProps} from "./Footer/Footer";
import {injectGlobal} from "emotion";
import {Segment, SemanticICONS} from "semantic-ui-react";
import {INoScriptProps, NoScript} from "./NoScript/NoScript";
import {IHelp} from "./Help/Help";

interface IShellProps {
    head?: IHeadProps;
    navbar: INavbarProps;
    footer: IShellFooterProps;
    noScript: INoScriptProps;
    shortcuts?: IShellShortcutModalProps;
    background: string;
    children: JSX.Element | JSX.Element[];
    linkComponent: JSX.Element;
    segment?: boolean;
    noContainer?: boolean;
}

interface IShellShortcutModalProps {
    triggerKey: IShortcutModalProviderProps["triggerKey"];
    title: IShortcutModalViewProps["title"];
    shortcuts: IShortcutModalViewProps["shortcuts"];
    help: IShortcutModalViewProps["help"];
}

interface IShellFooterProps {
    socialLinks: IFooterProps["socialLinks"];
    legal: IFooterProps["legal"];
    shortcutTrigger?: IShellShortcutsTrigger;
}

// We don't need to have the shortcuts here again
interface IShellShortcutsTrigger {
    title: string;
    icon: SemanticICONS;
    help: IHelp;
}

const Shell = ({shortcuts, ...otherProps}: IShellProps) =>
    shortcuts ? (
        <ShortcutModal {...shortcuts}>
            <InnerShell shortcuts={shortcuts} {...otherProps} />
        </ShortcutModal>
    ) : (
        <InnerShell {...otherProps} />
    );

const InnerShell = ({
                        background,
                        children,
                        linkComponent,
                        segment,
                        noContainer,
                        head,
                        navbar,
                        footer,
                        noScript,
                        shortcuts
                    }: IShellProps) => (
    <>
        {injectGlobal`
  body {
    background: url(${background}) no-repeat center center fixed !important;
    background-size: cover !important;
  }
`}
        <NoScript {...noScript} />
        {head && <Head {...head} />}
        <Navbar linkComponent={linkComponent} {...navbar} />
        {noContainer ? (
            <>
                {segment ? <Segment>{children}</Segment> : children}
                <Footer
                    {...footer}
                    shortcuts={
                        footer.shortcutTrigger &&
                        ((Object.assign(
                            {shortcutTrigger: footer.shortcutTrigger},
                            shortcuts
                        ) as unknown) as IFooterProps["shortcuts"])
                    }
                />
            </>
        ) : (
            <Container>
                {segment ? <Segment>{children}</Segment> : children}
                <Footer
                    {...footer}
                    shortcuts={
                        footer.shortcutTrigger &&
                        ((Object.assign(
                            {shortcutTrigger: footer.shortcutTrigger},
                            {shortcuts}
                        ) as unknown) as IFooterProps["shortcuts"])
                    }
                />
            </Container>
        )}
    </>
);

export {Shell};
export {IShellProps};