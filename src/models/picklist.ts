export interface PicklistValue {
    label:           string;
    apiName:         string;
    validForlabel:   string | null;
    validForapiName: string | null;
}

export interface PickList {
    label:          string;
    dependsOn:      null | string;
    apiName:        string;
    picklistValues: PicklistValue[];
}