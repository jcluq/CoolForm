

interface Props {
    register: any;
    index: number;
    value: any;
    errors?: any;
}


export const ProfessionalExpField = (props: Props) => {

    const register = props.register;
    const errors = props.errors;


    return (
        <div>
            <label htmlFor="Workplace" className=" flex mx-4 my-2 justify-between ">
                Workplace <input name="Workplace" {...register(`professionalExperienceArray.${props.index}.workplace`)} className="border rounded-md px-2 w-3/5" />
            </label>
            {errors?.workplace && <p className="error-message text-red-600 text-xs mx-4">{errors?.workplace?.message}</p>}
            <label htmlFor="Position" className=" flex mx-4 my-2 justify-between ">
                Position <input name="Position" {...register(`professionalExperienceArray.${props.index}.position`)} className="border rounded-md px-2 w-3/5" />
            </label>
            {errors?.position && <p className="error-message text-red-600 text-xs mx-4">{errors?.position?.message}</p>}
            <div className="flex mx-4 my-2 justify-between">
                <legend className="">Years</legend>
                <div className="flex justify-center w-3/5">
                    <input name="startP" {...register(`professionalExperienceArray.${props.index}.year.startP`)} className="border rounded-md px-2 w-4/12 mx-2" maxLength={4}/>
                    -
                    <input name="endP" {...register(`professionalExperienceArray.${props.index}.year.endP`)} className="border rounded-md px-2 w-4/12 mx-2" maxLength={4}/>
                </div>
              
            </div>
            {errors?.year?.startP && <p className="error-message text-red-600 text-xs mx-4">{errors?.year?.startP?.message}</p>}
                {errors?.year?.endP && <p className="error-message text-red-600 text-xs mx-4">{errors?.year?.endP?.message}</p>}
            <label htmlFor="Desciption" className=" flex mx-4 my-2 justify-between ">
                Description (Optional) <textarea id="Description" {...register(`professionalExperienceArray.${props.index}.description`)} rows={3} className=" border rounded-md px-2 w-3/5 text-sm" />
            </label>
            {errors?.description && <p className="error-message text-red-600 text-xs mx-4">{errors?.workplace?.description}</p>}
        </div>
    )

};
