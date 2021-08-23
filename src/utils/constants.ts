export const okrUrl = 'https://okrcentral.github.io/sample-okrs/db.json';

export enum API_STATUS {
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE'
}

export enum Objectives {
    CHILD_OBJECTIVES = "child_objectives"
}

export enum PUBLISH_CATEGORIES {
    OKR_CATEGORIES = 'OKR_CATEGORIES'
}

export interface OKR_TYPE {
    "id": string;
    "category": string;
    "title": string;
    "metric_name": string;
    "metric_start": string;
    "metric_target": string;
    "parent_objective_id": string;
    "archived": string;
    "child_objectives"?: any[]
}