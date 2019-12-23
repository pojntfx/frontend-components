import * as React from "react";
import {Socials} from "./Socials/Socials";
import {Grid, Modal, SemanticICONS, SemanticWIDTHS} from "semantic-ui-react";
import {LegalInfo} from "./Legal/LegalInfo";
import {Wrapper} from "./Wrapper";
import {Section} from "./Section";
import {LegalGrid} from "./Legal/LegalGrid";
import {Help, IHelp} from "../Help/Help";
import {Button} from "../Button";
import {IShortcutModalViewProps} from "../ShortcutModal/ShortcutModal";
import {ShortcutModalView} from "../..";

interface IFooterProps {
    socialLinks: ISocialLinkProps[];
    legal: ILegal;
    shortcuts?: IShortcutsWithHelp;
}

interface IShortcutsWithHelp {
    title: string;
    shortcutTrigger: IShortcutsTrigger;
    shortcuts: IShortcutModalViewProps;
}

interface IShortcutsTrigger {
    title: string;
    disabled: boolean;
    icon: SemanticICONS;
    help: IHelp;
}

interface ILegal {
    global: ILegalGlobal;
    licenses: ILegalLicense[];
}

interface ILegalGlobal {
    product: string;
    timeSpan: string;
    holder: string;
    help: IHelp;
}

interface ILegalBadge {
    img: string;
    title: string;
}

interface ILegalMore {
    link: string;
    title: string;
}

interface ISocialLink {
    title: string;
    img: string;
    link: string;
}

interface ILegalLicense extends ILegalGlobal {
    icon: SemanticICONS;
    spdxLicenseIdentifier: string;
    text: string;
    type: string;
    badge: ILegalBadge;
    more: ILegalMore;
}

interface ILegalInfoProps extends ILegalLicense {
}

interface ILegalBadgeProps {
    src: ILegalBadge["img"];
    alt: ILegalBadge["title"];
    href: ILegalLicense["more"]["link"];
}

interface ILegalTextProps {
    children: JSX.Element | string;
}

interface ISocialsProps {
    links: ISocialLinkProps[];
}

interface ISocialLinkProps extends ISocialLink {
}

interface ISocialButton extends ISocialLink {
    help: IHelp;
}

const Footer = ({
                    socialLinks,
                    legal: {global, licenses},
                    shortcuts
                }: IFooterProps) => (
    <Wrapper>
        <Socials links={socialLinks}/>
        <Grid stackable columns={2}>
            <Section width={4}>
                <Help {...global.help}>
          <span>
            &copy; {global.timeSpan} {global.holder}
          </span>
                </Help>
            </Section>
            <Section width={12}>
                <LegalGrid
                    stackable
                    columns={
                        (shortcuts
                            ? licenses.length + 1
                            : licenses.length) as SemanticWIDTHS
                    }
                >
                    {shortcuts && (
                        <Grid.Column>
                            <ShortcutModalView
                                {...shortcuts.shortcuts}
                                trigger={
                                    <Help {...shortcuts.shortcutTrigger.help}>
                                        <Button
                                            fluid
                                            icon={shortcuts.shortcutTrigger.icon}
                                            content={shortcuts.shortcutTrigger.title}
                                            disabled={shortcuts.shortcutTrigger.disabled}
                                        />
                                    </Help>
                                }
                                shortcuts={
                                    (shortcuts.shortcuts
                                        .shortcuts as unknown) as IShortcutModalViewProps["shortcuts"]
                                }
                            />
                        </Grid.Column>
                    )}
                    {licenses.map(
                        (
                            {
                                product,
                                type,
                                icon,
                                timeSpan,
                                holder,
                                spdxLicenseIdentifier,
                                text,
                                badge,
                                more,
                                help
                            },
                            index
                        ) => (
                            <Grid.Column key={index}>
                                <Modal
                                    trigger={
                                        <Help {...help}>
                                            <Button icon={icon} content={`${type} License`} fluid/>
                                        </Help>
                                    }
                                    closeIcon
                                >
                                    <Modal.Header>{type} License</Modal.Header>
                                    <LegalInfo
                                        product={product}
                                        type={type}
                                        timeSpan={timeSpan}
                                        icon={icon}
                                        holder={holder}
                                        spdxLicenseIdentifier={spdxLicenseIdentifier}
                                        text={text}
                                        badge={badge}
                                        more={more}
                                        help={help}
                                    />
                                </Modal>
                            </Grid.Column>
                        )
                    )}
                </LegalGrid>
            </Section>
        </Grid>
    </Wrapper>
);

export {Footer};
export {ISocialButton};
export {ISocialsProps};
export {ILegalTextProps};
export {ILegalBadgeProps};
export {ILegalInfoProps};
export {ILegalLicense};
export {ILegalMore};
export {ILegalBadge};
export {ILegalGlobal};
export {ILegal};
export {IFooterProps};