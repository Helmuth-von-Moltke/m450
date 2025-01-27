export enum PhoneType {
    WORK,
    MOBILE,
    HOME
}

export type phoneNumberType = {
    value: string;
    type: PhoneType;
    preferred: boolean;
}