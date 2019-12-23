import styled from "@emotion/styled";
import {Card, CardGroupProps, CardProps, HeaderProps, SemanticICONS} from "semantic-ui-react";

const ActionCard = styled(Card)`
  & > .content {
    & > h2 {
      ${(props: CardProps) =>
    props.disabled ? "color: grey!important" : null};
    }
  }
`;

export {ActionCard};

interface IActionCardsLinks {
      links: IActionCardLink[];
      linksPerRow: CardGroupProps["itemsPerRow"];
      linkComponent: JSX.Element;
}

interface IActionCardLink {
      title: string;
      icon: SemanticICONS;
      link: string;
      text: string;
      disabled?: boolean;
}

interface IActionCardsProps extends IActionCardsLinks {
      header: HeaderProps;
      text: string;
}

export {IActionCardsProps};
export {IActionCardsLinks};