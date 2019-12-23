import * as React from "react";
import {SubsystemDescription} from "./SubsystemDescription";
import {Divider, IDividerProps} from "../Divider/Divider";
import {IStatisticsProps, Statistics} from "../Statistics";
import {IProjectListProps, ProjectList} from "../ProjectList/ProjectList";
import {Card, Image} from "semantic-ui-react";
import {SubsystemHeader} from "./SubsystemHeader";
import {SemanticCOLORS, SemanticICONS} from "semantic-ui-react/dist/commonjs/generic";

interface ISubsystemProps {
    image: string;
    header: ISubsystemHeaderProps;
    overviewDivider: IDividerProps;
    trendingProjectsDivider: IDividerProps;
    statistics: IStatisticsProps["statistics"];
    text: string;
    color: SemanticCOLORS;
    imgAlt: string;
    trendingProjects: IProjectListProps;
}

interface ISubsystemHeaderProps {
    title: string;
    subtitle: string;
    icon: SemanticICONS;
    docsLink: string;
    docsDisabled?: boolean;
    repoLink: string;
    repoDisabled?: boolean;
    forumLink: string;
    forumDisabled?: boolean;
    color: SemanticCOLORS;
    linkComponent: JSX.Element;
}

const Subsystem = ({
                       color,
                       imgAlt,
                       image,
                       header,
                       text,
                       overviewDivider,
                       statistics,
                       trendingProjectsDivider,
  trendingProjects
}: ISubsystemProps) => (
  <Card fluid color={color}>
    <Image alt={imgAlt} src={image} />
    <Card.Content>
      <SubsystemHeader
        repoLink={`${trendingProjects.endpoint}/${trendingProjects.groupName}/${
          trendingProjects.projectName
        }`}
        {...header}
        color={color}
      />
        <SubsystemDescription>{text}</SubsystemDescription>
        <Divider offset="bottom" {...overviewDivider} />
        <Statistics statistics={statistics}/>
        <Divider offset="top" {...trendingProjectsDivider} />
        <ProjectList {...trendingProjects} />
    </Card.Content>
  </Card>
);

export {Subsystem};
export {ISubsystemHeaderProps};
export {ISubsystemProps};