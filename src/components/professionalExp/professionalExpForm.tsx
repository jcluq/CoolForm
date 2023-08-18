import { useState, FormEvent } from "react";
import { ProfessionalExpField } from "./professionalExpField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFieldArray } from "react-hook-form";
import { ProfessionalData, educationDataSchema, professionalDataSchema } from "../../interfaces";





interface Props {
    setFunction: Function;
}

const schema = professionalDataSchema;

export const ProfessionalExpForm = (props: Props) => {

    const [professionalExp, setProfessionalExp] = useState<ProfessionalData[]>([])
        
    const { control, handleSubmit, getValues, register,  formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const { fields, append, remove, } = useFieldArray({
        control,
        name: 'professionalExperienceArray'
    });

    const onSubmit = (data: any) => {

        console.log(data);
        setProfessionalExp(data.professionalExperienceArray);
        props.setFunction(data.professionalExperienceArray);

    }


    const addProExp = () => {

        append({


            workplace: "",
            position: "",
            year: {
                startP: 0,
                endP: 0,
            },
            description: ""
        })

        setProfessionalExp(getValues().professionalExperienceArray);

    }

    const removeEduExp = () => {
        remove(professionalExp.length - 1);
        setProfessionalExp(getValues().professionalExperienceArray);

    }

    //console.log('form errors >>>>>', errors);


    return (
        <div className="proForm flex flex-col  bg-emerald-300 p-2 m-4  rounded-lg max-h-fit shadow-lg">
            <h2 className=" m-auto">Professional Experience</h2>
            <form className="flex flex-col  m-3" onSubmit={handleSubmit(onSubmit)}>

                {
                    fields.map((field, index) => (
                        <ProfessionalExpField
                            key={field.id}
                            index={index}
                            register={register}
                            value={field}
                            errors={errors?.professionalExperienceArray?.[index]}
                        />

                    ))
                }



                <div className="flex justify-center">
                    {professionalExp.length > 0 && <button type="button" onClick={removeEduExp} className=" bg-stone-200 rounded-md w-24 m-4">-</button>}

                    <button type="button" className=" bg-stone-200 rounded-md w-24 m-4 " onClick={addProExp}>+</button>
                </div>
                {professionalExp.length > 0 && <input type="submit" className=" bg-stone-200 rounded-md w-24 m-4 cursor-pointer" ></input>}
            </form>
        </div>
    )

};
