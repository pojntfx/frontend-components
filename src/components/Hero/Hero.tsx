import * as React from "react";
import {HeroWrapper} from "./HeroWrapper";
import {HeroSubHeader} from "./HeroSubHeader";
import {HeroActions} from "./HeroActions";
import {Button} from "../Button";
import {SemanticCOLORS, SemanticICONS} from "semantic-ui-react";
import {VideoModal} from "../..";

interface IHeroProps {
    title: string;
    subtitle: string;
    primaryAction: IHeroPrimaryActionProps;
    secondaryAction: IHeroVideoActionProps;
    linkComponent: JSX.Element;
}

interface IHeroActionProps {
    title: string;
    header: string;
    icon: SemanticCOLORS;
    disabled: boolean;
}

interface IHeroPrimaryActionProps extends IHeroActionProps {
    link: string;
}

interface IHeroVideoActionProps extends IHeroActionProps {
    video: string;
}

const Hero = ({
                  title,
                  subtitle,
                  primaryAction,
                  secondaryAction,
                  linkComponent
              }: IHeroProps) => (
    <HeroWrapper>
        <h1>{title}</h1>
        <HeroSubHeader>{subtitle}</HeroSubHeader>
        <HeroActions>
            <Button
                primary
                content={primaryAction.title}
                icon={primaryAction.icon}
                as={linkComponent}
                to={primaryAction.link}
                disabled={primaryAction.disabled}
            />
            <VideoModal
                title={secondaryAction.title}
                header={secondaryAction.header}
                icon={secondaryAction.icon as SemanticICONS}
                video={secondaryAction.video}
                disabled={secondaryAction.disabled}
            />
        </HeroActions>
    </HeroWrapper>
);

export {Hero};
export {IHeroVideoActionProps};
export {IHeroPrimaryActionProps};
export {IHeroProps};