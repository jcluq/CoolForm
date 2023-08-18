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

    school: string;
    title: string;
    year: {
        start: number;
        end: number;
    }

}


export interface EducationDataArray extends Array<EducationData> { };


export const educationDataSchema = yup.object().shape({
    array: yup.array().of(
        yup.object().shape({
            school: yup.string().required("Please write the school name"),
            title: yup.string().required("Please write the title"),
            year: yup.object().shape({
                start: yup.number().typeError("Please write a valid year").required().min(1950, "Minimum start year is 1950").max(2024, "Maximum start year is 2024"),
                end: yup.number().typeError("Please write a valid year").required().min(1950, "Minimum end year is 1950").max(2024, "Maximum end year is 2024"),
            })
        })).required()
}).required();


export interface ProfessionalData {

    workplace: string;
    position: string;
    year: {
        startP: number;
        endP: number;
    };
    description?: string;

}

export interface ProfessionalDataArray extends Array<ProfessionalData> { };

export const professionalDataSchema = yup.object().shape({
    professionalExperienceArray: yup.array().of(
        yup.object().shape({
            workplace: yup.string().required("Please write the workplace name"),
            position: yup.string().required("Please write the position you had at the workplace"),
            year: yup.object().shape({
                startP: yup.number().typeError("Please write a valid year").required().min(1950, "Minimum start year is 1950").max(2024, "Maximum start year is 2024"),
                endP: yup.number().typeError("Please write a valid year").required().min(1950, "Minimum end year is 1950").max(2024, "Maximum end year is 2024"),
            }),
            description: yup.string()
        })).required()
}).required();
