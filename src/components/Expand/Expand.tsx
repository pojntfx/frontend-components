import * as React from "react";
import {Component} from "react";
import {ExpandView} from "./ExpandView";
import {AccordionTitleProps} from "semantic-ui-react";

interface IExpandProps {
    title: string;
    children: JSX.Element | JSX.Element[];
    disabled?: boolean;
    styled?: boolean;
    initiallyClosed?: boolean;
}

interface IExpandViewProps extends IExpandProps {
    open: AccordionTitleProps["active"];
    onToggle: AccordionTitleProps["onClick"];
}

interface IExpandViewWrapperProps {
    disabled: IExpandProps["disabled"];
    initiallyClosed: IExpandProps["initiallyClosed"];
}

class Expand extends Component<IExpandProps> {
    state = {
        isOpen: !this.props.initiallyClosed
    };

    handleToggle = () => {
        !this.props.disabled &&
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <ExpandView
                open={this.state.isOpen}
                onToggle={this.handleToggle}
                {...this.props}
            />
        );
    }
}

export {Expand};
export {IExpandViewWrapperProps};
export {IExpandViewProps};
export {IExpandProps};