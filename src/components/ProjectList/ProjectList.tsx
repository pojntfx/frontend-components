import * as React from "react";
import {ProjectListWrapper} from "./ProjectListWrapper";
import {ProjectListProvider} from "./ProjectListProvider";
import {Project} from "./Project";
import {ProjectPlaceholder} from "./ProjectPlaceholder";

interface IProjectListProps {
    endpoint: IProjectProviderProps["endpoint"];
    groupName: string;
    projectName: string;
    projectID: IProjectProviderProps["projectID"];
}

interface IProjectProps {
    title: string;
    text: string;
    link: string;
    lastUpdateDate: Date;
}

interface IProjectProviderProps {
    path: string;
    endpoint: string;
    projectID: string;

    children(props: IProjectProviderChildrenProps): JSX.Element | JSX.Element[];
}

interface IProjectProviderState {
    loading: boolean;
    lastUpdateDate: Date;
    text: string;
}

interface IProjectProviderPackageJSON {
    name: string;
}

interface IProjectProviderChildrenProps {
    loading: IProjectProviderState["loading"];
    lastUpdateDate: IProjectProps["lastUpdateDate"];
    text: IProjectProps["text"];
}

interface IProjectListProviderProps {
    endpoint: IProjectProviderProps["endpoint"];
    projectID: IProjectProviderProps["projectID"];

    children(
        props: IProjectListProviderChildrenProps
    ): JSX.Element | JSX.Element[];
}

interface IProjectListProviderChildrenProps {
    loading: IProjectProviderState["loading"];
    projects: {
        title: IProjectProps["title"];
        lastUpdateDate: IProjectProps["lastUpdateDate"];
        text: IProjectProps["text"];
        path: IProjectProviderProps["path"];
    }[];
}

interface IProjectListProviderState {
    loading: IProjectProviderState["loading"];
    projects: IProjectListProviderChildrenProps["projects"];
}

interface IProjectListProviderResponseProjects {
    name: IProjectProps["title"];
    path: IProjectProviderProps["path"];
}

export const ProjectList = ({
                                endpoint,
                                groupName,
                                projectName,
                                projectID
                            }: IProjectListProps) => (
    <ProjectListWrapper>
        <ProjectListProvider endpoint={endpoint} projectID={projectID}>
            {({loading, projects}) =>
                loading
                    ? new Array(5)
                        .fill(0)
                        .map((_, index) => <ProjectPlaceholder key={index}/>)
                    : projects.map(({path, ...otherProps}, index) => (
                        <Project
                            {...otherProps}
                            link={`${endpoint}/${groupName}/${projectName}/tree/master/${path}`}
                            key={index}
                        />
                    ))
            }
        </ProjectListProvider>
    </ProjectListWrapper>
);
export {IProjectListProviderResponseProjects};
export {IProjectListProviderState};
export {IProjectListProviderProps};
export {IProjectProviderPackageJSON};
export {IProjectProviderState};
export {IProjectProviderProps};
export {IProjectProps};
export {IProjectListProps};