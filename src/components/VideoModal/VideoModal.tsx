import * as React from "react";
import {Modal, SemanticICONS} from "semantic-ui-react";
import {Button} from "../Button";
import {VideoModalVideo} from "./VideoModalVideo";

interface IVideoModalProps {
    title: string;
    header: string;
    icon: SemanticICONS;
    video: string;
    disabled: boolean;
}

const VideoModal = ({
                        title,
                        header,
                        icon,
                        video,
                        disabled,
                        ...otherProps
                    }: IVideoModalProps) => (
    <Modal
    trigger={
      <Button secondary icon={icon} content={title} disabled={disabled} />
    }
    closeIcon
    disabled={disabled}
    {...otherProps}
  >
    <Modal.Header>{header}</Modal.Header>
    <Modal.Content>
      <VideoModalVideo controls src={video} />
    </Modal.Content>
  </Modal>
);

export {VideoModal};
export {IVideoModalProps};