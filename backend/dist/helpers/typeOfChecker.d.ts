export declare enum ISTYPE {
    STR = "string",
    NUM = "number",
    BOO = "boolean"
}
export declare const IS_TYPEOF: (value: any, type: ISTYPE, error: string) => boolean;
