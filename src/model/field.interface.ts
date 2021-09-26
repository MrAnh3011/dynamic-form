export interface JsonData {
    name: string;
    label: string;
    value?: string;
    type: string;
    validators: Validator[];
    options?: { key: string, value: string}[];
}

export interface Validator {
    name: string;
    validator: any;
    message: string;
}