import { ChangeEvent, useEffect, useState } from "react";
import { EducationData, educationDataSchema } from "../../interfaces";


interface Props {
    id: number;
    setFunction: Function;
    error?: string;
}



export const EduField = (props: Props) => {


    const [eduField, setEduField] = useState<EducationData>({
        id: props.id,
        school: "",
        title: "",
        year: {
            start: NaN,
            end: NaN,
        },
        error:props.error,
    })

    useEffect(() => {
        updateParent();
        //console.log("bang");
    }, [eduField]);

    const updateParent = () => {
        
        props.setFunction(eduField)
    }


    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEduField({ ...eduField, school: e.target.value });
    }

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEduField({ ...eduField, title: e.target.value });
    }

    const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newData = {
            ...eduField,
            year: {
                ...eduField.year,
                [e.target.name]: e.target.value
            }
        }
        setEduField(newData);
    }

    return (

        <div>
            <label htmlFor="school" className=" flex mx-4 my-2 justify-between ">
                School <input name="school" onChange={e => handleNameChange(e)} className="border rounded-md px-2 w-3/5" />
            </label>
            <label htmlFor="title" className=" flex mx-4 my-2 justify-between ">
                Title <input name="title" onChange={e => handleTitleChange(e)} className="border rounded-md px-2 w-3/5" />
            </label>
            <div className="flex mx-4 my-2 justify-between">
                <legend className="">Years</legend>
                <div className="flex justify-center w-3/5">
                    <input name="start" onChange={e => handleYearChange(e)} className="border rounded-md px-2 w-4/12 mx-2" />
                    -
                    <input name="end" onChange={e => handleYearChange(e)} className="border rounded-md px-2 w-4/12 mx-2" />
                </div>
            </div>
            {props?.error}
        </div>
        



    )
};
