import {PageNotFoundWrapper} from "./PageNotFoundWrapper";
import styled from "@emotion/styled";

const PageNotFound = styled(PageNotFoundWrapper)`
  padding: 1rem;
  min-height: calc(100vh - 20rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export {PageNotFound};

interface IPageNotFoundProps {
    image: string;
    homeLink: string;
    linkComponent: JSX.Element;

    headComponent(title: string): JSX.Element;
}

export {IPageNotFoundProps};