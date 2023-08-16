import { useEffect, useState } from "react";

interface Props {
    id: number;
    setFunction: Function
}

export const ProfessionalExpField = (props:Props) => {

    const [professionField, setProfessionField] = useState<any>({
        id: props.id,
        school: "",
        title: "",
        year: {
            startP: 0,
            endP: 0,
        }
    });

    useEffect(() => {
        updateParent();
        //console.log("bang");
    }, [professionField]);

 

    function updateParent(): void {
        props.setFunction(professionField);
    }


    const handleWorkplaceChange = (e: any) => {
        setProfessionField({ ...professionField, workplace: e.target.value });
    }

    const handlePositionChange = (e: any) => {
        setProfessionField({ ...professionField, position: e.target.value });
    }

    const handleYearChange = (e: any) => {
        let newData = {
            ...professionField,
            year: {
                ...professionField.year,
                [e.target.name]: e.target.value
            }
        }
        setProfessionField(newData);
    }

    const handleDesciptionChange = (e: any) => {
        setProfessionField({ ...professionField, description: e.target.value });
    }



    return (
        <div>
            <label htmlFor="Workplace" className=" flex mx-4 my-2 justify-between ">
                Workplace <input name="Workplace" onChange={e => handleWorkplaceChange(e)} className="border rounded-md px-2 w-3/5" />
            </label>
            <label htmlFor="Position" className=" flex mx-4 my-2 justify-between ">
                Position <input name="Position" onChange={e => handlePositionChange(e)} className="border rounded-md px-2 w-3/5" />
            </label>
            <div className="flex mx-4 my-2 justify-between">
                <legend className="">Years</legend>
                <div className="flex justify-center w-3/5">
                    <input name="startP" onChange={e => handleYearChange(e)} className="border rounded-md px-2 w-4/12 mx-2" />
                    -
                    <input name="endP" onChange={e => handleYearChange(e)} className="border rounded-md px-2 w-4/12 mx-2" />
                </div>
            </div>
            <label htmlFor="Desciption" className=" flex mx-4 my-2 justify-between ">
                Description <textarea  id="Description" onChange={e => handleDesciptionChange(e)} rows={3} className=" border rounded-md px-2 w-3/5 text-sm" />
            </label>
        </div>
    )
    
};
