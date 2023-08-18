import {  useState, } from "react";
import { EduField } from "./eduField";
import { EducationData, educationDataSchema} from "../../interfaces";
import { useForm,  useFieldArray } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";

interface Props {
    setFunction: Function
}




let schema = educationDataSchema;




export const EduForm = (props: Props) => {

    const [eduExps, setEduExps] = useState<EducationData[]>([]);
    const { control, handleSubmit, getValues, register, formState: {errors}} = useForm({
        resolver: yupResolver(educationDataSchema)
    });
    const { fields , append, remove, } = useFieldArray({
        control,
        name: 'array'
    });

    
    const onSubmit = (data: any) => {

        console.log(data);
        setEduExps(data.array);
        props.setFunction(data.array);

    }



    const addEduExp = () => {
        append({


            school: "",
            title: "",
            year: {
                start: 0,
                end: 0,
            }
        })

        setEduExps(getValues().array);
        
    }





    const removeEduExp = () => {
        remove(eduExps.length-1);
        setEduExps(getValues().array);

    }



    //console.log('form errors >>>>>', errors);



    return (


        <div className=" flex flex-col  bg-emerald-300 p-2 m-4 rounded-lg max-h-fit shadow-lg">
            <h2 className=" m-auto ">Education</h2>

            <form className="flex flex-col  m-3" onSubmit={handleSubmit(onSubmit)}>


                {
                    fields.map((field, index) => (
                        <EduField
                            key={field.id}
                            index={index}
                            register={register}  
                            value={field}
                            errors={errors?.array?.[index]}
                        />

                    ))
                }





                <div className="flex justify-center">
                    {eduExps.length > 0 && <button type="button" onClick={removeEduExp} className=" bg-stone-200 rounded-md w-24 m-4">-</button>}

                    <button type="button" className=" bg-stone-200 rounded-md w-24 m-4 " onClick={addEduExp}>+</button>
                </div>
                {eduExps.length > 0  && <input type="submit" className=" bg-stone-200 rounded-md w-24 m-4 cursor-pointer" ></input> }


            </form>

        </div>


    );

};
