import * as React from "react";
import * as ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css"
import {ExpandablePaper} from "./components/ExpandablePaper";
import {Container} from "./components/Container";
import {ExpandablePaperWithDraggableGridLayout} from "./components/ExpandablePaperWithDraggableGridLayout";
import styled from "@emotion/styled";
import {Paper} from "./components/Paper";

const Title = styled.h1`
    padding-top: 1rem;
`;

const Main = () => <>
    <Container>
        <Title>Frontend Components</Title>

        <Paper>
            <h2>Paper</h2>

            <Paper>
                Inner content
            </Paper>
        </Paper>

        <Paper>
            <h2>Expandable Paper</h2>

            <ExpandablePaper title="Expandable Paper" initiallyClosed>
                <p>
                    Inner content
                </p>
            </ExpandablePaper>
        </Paper>

        <Paper>
            <h2>Expandable Paper with Draggable Grid Layout</h2>

            <ExpandablePaperWithDraggableGridLayout title="Expandable Paper with Draggable Grid Layout" storageId="1"
                                                    initiallyClosed>
                <div>
                    First inner content
                </div>
                <div>
                    Second inner content
                </div>
            </ExpandablePaperWithDraggableGridLayout>
        </Paper>
    </Container>
</>;

const root = document.getElementById("root");

ReactDOM.render(
    <Main/>,
    root
);
