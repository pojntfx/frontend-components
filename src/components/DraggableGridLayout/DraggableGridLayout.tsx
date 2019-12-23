import * as React from "react";
import {DraggableGridLayoutView} from "./DraggableGridLayoutView";
import {ResponsiveProps} from "react-grid-layout";

interface IDraggableGridLayoutViewProps extends ResponsiveProps {
    children: JSX.Element[];
}

interface IDraggableGridLayoutProps extends IDraggableGridLayoutViewProps {
    storageId: string;
    disabled?: boolean;
}

const DraggableGridLayout = ({
                                 storageId,
                                 disabled,
                                 ...otherProps
                             }: IDraggableGridLayoutProps) => (
    <DraggableGridLayoutView
        layouts={
            JSON.parse((window &&
                window.localStorage.getItem(storageId)) as string) || {}
        }
        onLayoutChange={(_: any, layouts: any) => {
            !disabled &&
            window &&
            window.localStorage.setItem(storageId, JSON.stringify(layouts));
        }}
        isDraggable={!disabled}
        isResizable={!disabled}
        {...otherProps}
    />
);

export {DraggableGridLayout};
export {IDraggableGridLayoutProps};
export {IDraggableGridLayoutViewProps};