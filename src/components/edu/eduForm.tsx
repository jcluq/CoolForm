import { FormEvent, useState, useEffect } from "react";
import { EduField } from "./eduField";
import { EducationData, educationDataSchema } from "../../interfaces";

interface Props {
    setFunction: Function
}



let schema = educationDataSchema;

interface EducationDataArray extends Array<EducationData> { };


export const EduForm = (props: Props) => {

    const [eduExps, setEduExps] = useState<EducationDataArray>([]);
    const [hasErrors, setHasErrors] = useState<boolean>(true);
   


    const verifyErrors = async() => {
        
        eduExps.forEach(exp => {
            schema.validate(exp, { abortEarly: false })
                .then((responseData) => {
                    //console.log("no validation errors");
                    //console.log(responseData);


                })
                .catch((err) => {
                    console.log(err.errors);

                    let newObj = {...exp,error:err.errors};
                   
                    updateFromChild(newObj);
                    
                    setHasErrors(true);

                });
        

        })
    }

  

    const onSubmit = (event: FormEvent) => {       
        event.preventDefault();
        setHasErrors(false);
        verifyErrors();
       
        
       
       
        hasErrors!= true && props.setFunction(eduExps);


    }

    const updateFromChild = (obj: EducationData) => {

        let newArray = [...eduExps]
        newArray[obj.id] = obj;
        setEduExps(newArray);
 
    }

    const addEduExp = (ide: number) => {

        let newExp = {
            id: ide,
            school: "",
            title: "",
            year: {
                start: 0,
                end: 0,
            }
        };

        let newArray = [...eduExps];
        newArray[newExp.id] = newExp;
        setEduExps(newArray);
        //console.log(eduExps.length)

    }

    const removeEduExp = () => {
        let newArray = [...eduExps];
        newArray.pop();
        setEduExps(newArray);
        //console.log(newArray)
    }

    useEffect(() => {
        let newArray = [...eduExps];
        newArray[0] = {
            id: 0,
            school: "",
            title: "",
            year: {
                start: 0,
                end: 0,
            }
        }
        setEduExps(newArray);
      
    }, []);


   

    useEffect(()=> {
        console.log(hasErrors)
    },[hasErrors]
    )

    return (


        <div className=" flex flex-col  bg-emerald-300 p-2 m-4  rounded-lg max-h-fit shadow-lg">
            <h2 className=" m-auto ">Education</h2>
            <form className="flex flex-col  m-3" onSubmit={onSubmit}>




                {
                    eduExps.map((edu: EducationData) => (
                        
                        <EduField key={edu.id} id={edu.id} setFunction={updateFromChild} error={edu.error}/>
                    ))
                }

                <div className="flex justify-center">
                    {eduExps.length > 1 && <button type="button" onClick={removeEduExp} className=" bg-stone-200 rounded-md w-24 m-4">-</button>}

                    <button type="button" className=" bg-stone-200 rounded-md w-24 m-4 " onClick={() => addEduExp(eduExps.length)}>+</button>
                </div>
                <input type="submit" className=" bg-stone-200 rounded-md w-24 m-4 cursor-pointer" ></input>


            </form>
        </div>


    );

};
