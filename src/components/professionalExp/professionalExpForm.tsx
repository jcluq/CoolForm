import { useState,FormEvent } from "react";
import { ProfessionalExpField } from "./professionalExpField";





interface Props {
    setFunction: Function;
}

export const ProfessionalExpForm = (props: Props) => {

    const [professionalExp,setProfessionalExp] = useState<any>([])


    const onSubmit = (event: FormEvent) => {
        
        event.preventDefault();
        props.setFunction(professionalExp);
    }

    
    const updateFromChild = (obj: any) => {

        let newArray = [...professionalExp]
        newArray[obj.id] = obj;
        setProfessionalExp(newArray);
        
    }

    const addEduExp = (ide: any) => {

        let newExp = {
            id: ide,
            school: "",
            title: "",
            year: {
                start: 0,
                end: 0,
            }
        };

        let newArray = [...professionalExp];
        newArray[newExp.id] = newExp;
        setProfessionalExp(newArray);
        //console.log(professionalExp.length)

    }

    const removeEduExp = () => {
        let newArray = [...professionalExp];
        newArray.pop();
        setProfessionalExp(newArray);
        //console.log(newArray)
    }

    return (
        <div className="proForm flex flex-col  bg-emerald-300 p-2 m-4  rounded-lg max-h-fit shadow-lg">
            <h2 className=" m-auto">Professional Experience</h2>
            <form className="flex flex-col  m-3" onSubmit={onSubmit}>
                
                <ProfessionalExpField key = {0} id={0} setFunction={updateFromChild} />
                {
                    professionalExp.map((edu: any) => (
                        edu.id > 0 && <ProfessionalExpField key={edu.id} id={edu.id} setFunction={updateFromChild} />
                    ))
                }

                <div className="flex justify-center">
                    {professionalExp.length > 1 && <button type="button" onClick={removeEduExp} className=" bg-stone-200 rounded-md w-24 m-4">-</button>}

                    <button type="button" className=" bg-stone-200 rounded-md w-24 m-4 " onClick={() => addEduExp(professionalExp.length)}>+</button>
                </div>
                <input type="submit" className=" bg-stone-200 rounded-md w-24 m-4 cursor-pointer" ></input>
            </form>
        </div>
    )

};
