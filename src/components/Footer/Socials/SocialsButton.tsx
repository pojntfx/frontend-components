import * as React from "react";
import styled from "@emotion/styled";
import {Help} from "../..";
import {ISocialButton} from "../Footer";

const SocialButtonTemplate = (
    {img, title, link, help, ...otherProps}: ISocialButton,
    index: number
) => (
    <Help {...help}>
        <a href={link} key={index} {...otherProps}>
            <img src={img} alt={title}/>
        </a>
    </Help>
);

const SocialButton = styled(SocialButtonTemplate)`
  display: block;
  margin-right: 1em;
  &:first-child {
    margin-left: auto;
  }
  &:last-child {
    margin-right: auto;
  }
`;

export {SocialButton};
