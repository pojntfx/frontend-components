import * as React from "react";
import {Component} from "react";
import {Icon, Message} from "semantic-ui-react";
import {SemanticICONS} from "semantic-ui-react/dist/commonjs/generic";

interface IBroadcastProps {
    title: string;
    text: string;
    icon: string;
    readMoreLink: string;
    readMoreText: string;

    linkComponent(
        to: IBroadcastProps["readMoreLink"],
        children: JSX.Element | JSX.Element[]
    ): JSX.Element;
}

class Broadcast extends Component<IBroadcastProps> {
    state = {
        isVisible: true
    };

    componentDidMount = () =>
        this.setState({
            isVisible:
                window &&
                window.localStorage.getItem("libresat-latest-broadcast-visible")
                    ? window &&
                    window.localStorage.getItem("libresat-latest-broadcast-visible") ===
                    "true"
                    ? true
                    : false
                    : true
        });

    handleDismiss = () => {
        this.setState({isVisible: false});
        window &&
        window.localStorage.setItem(
            "libresat-latest-broadcast-visible",
            false.toString()
        );
    };

    render() {
        return (
            <Message
                onDismiss={this.handleDismiss}
                hidden={!this.state.isVisible}
                icon
                info
            >
                <Icon name={this.props.icon as SemanticICONS}/>
                <Message.Content>
                    <Message.Header>{this.props.title}</Message.Header>
                    {this.props.text}
                    <br/>
                    {this.props.linkComponent(
                        this.props.readMoreLink,
                        <>
                            <Icon name="arrow right"/>
                            {this.props.readMoreText}
                        </>
                    )}
                </Message.Content>
            </Message>
        );
    }
}

export {Broadcast};
export {IBroadcastProps};