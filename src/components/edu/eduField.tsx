


interface Props {
    register: any;
    index: number;
    value: any;
    errors?: any;
}



export const EduField = (props: Props) => {

    const register = props.register;
    const errors = props.errors;

    return (

        <div>
            <label htmlFor="school" className=" flex mx-4 my-2 justify-between ">
                School <input name="school" {...register(`array.${props.index}.school`)} className="border rounded-md px-2 w-3/5" />
            </label>
            {errors?.school && <p className="error-message text-red-600 text-xs mx-4">{errors?.school?.message}</p>}
            <label htmlFor="title" className=" flex mx-4 my-2 justify-between ">
                Title <input {...register(`array.${props.index}.title`)} className="border rounded-md px-2 w-3/5" />
            </label>
            {errors?.title && <p className="error-message text-red-600 text-xs mx-4">{errors?.title?.message}</p>}
            <div className="flex mx-4 my-2 justify-between">
                <legend className="">Years</legend>
                <div className="flex justify-center w-3/5">
                    <input  {...register(`array.${props.index}.year.start`)} className="border rounded-md px-2 w-4/12 mx-2" maxLength={4}/>
                    -
                    <input {...register(`array.${props.index}.year.end`)} className="border rounded-md px-2 w-4/12 mx-2" maxLength={4}/>
                </div>



            </div>

            {errors?.year?.start && <p className="error-message text-red-600 text-xs mx-4">{errors?.year?.start?.message}</p>}
            {errors?.year?.end && <p className="error-message text-red-600 text-xs mx-4">{errors?.year?.end?.message}</p>}

        </div>




    )
};
