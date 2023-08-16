import * as yup from "yup";

export interface PersonalData {
    name: string;
    phone: number;
    email: string;
    about: string;
}



export type ConditionalSchema<T> = T extends string
    ? yup.StringSchema
    : T extends number
    ? yup.NumberSchema
    : T extends boolean
    ? yup.BooleanSchema
    : T extends Record<any, any>
    ? yup.AnyObjectSchema
    : T extends Array<any>
    ? yup.ArraySchema<any, any>
    : yup.AnySchema;

export type Shape<Fields> = {
    [Key in keyof Fields]: ConditionalSchema<Fields[Key]>;
};

export interface EducationData {
    id: number;
    school: string;
    title: string;
    year: {
        start: number;
        end: number;
    }
    error?: string;
}

export const educationDataSchema = yup.object<Shape<EducationData>>({
    id: yup.number().required(),
    school: yup.string().required(),
    title: yup.string().required(),
    year: yup.object().shape({
        start: yup.number().typeError("Please enter a valid year").required().min(1900),
        end: yup.number().typeError("Please enter a valid year").required().min(1900),
    })
})
