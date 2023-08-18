import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { PersonalData } from "../interfaces";




interface Props {
    setFunction: Function
  }

const validationSchema = yup.object({
    name: yup.string().required("Full Name is required"),
    phone: yup.number().required("Please insert a phone number").typeError("Please write a phone number"),
    email: yup.string().required("Email is required"),
    about: yup.string().required("A description about you is required"),
  });

export const PersonalDataForm = (props: Props) => {
   
    const {register, handleSubmit, formState: {errors}} = useForm<PersonalData>({
        resolver: yupResolver(validationSchema)
    });

  
    const onSubmitHandler = (values: PersonalData) => {   
        
        const nd = {...values};
        console.log(nd);    
        

        
        props.setFunction(nd); 
    }


    return (
        
        <div className="cvform flex flex-col  bg-emerald-300 p-2 m-4  rounded-lg max-h-fit shadow-lg">
            <h2 className=" m-auto ">Personal Data</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)} className=" flex flex-col  m-3" >
                
                    <label htmlFor="name" className=" flex mx-4 my-2 justify-between ">
                        Full Name <input {...register("name")} id="name" className="border rounded-md px-2 w-3/5" />
                    </label>
                    {errors.name &&  <p className="error-message text-red-600 text-xs mx-4">{errors.name.message}</p>}
                    <label htmlFor="name" className=" flex mx-4 my-2 justify-between ">
                        Phone <input {...register("phone")} id="name" className="border rounded-md px-2 w-3/5" />
                    </label>
                    {errors.phone &&  <p className="error-message text-red-600 text-xs mx-4">{errors.phone.message}</p>}
                    <label htmlFor="email" className=" flex mx-4 my-2 justify-between ">
                        Email <input {...register("email")} id="email"  className=" border rounded-md px-2 w-3/5 " />
                    </label> 
                    {errors.email &&  <p className="error-message  text-red-600 text-xs mx-4">{errors.email.message}</p>}
                    <label htmlFor="about" className=" flex mx-4 my-2 justify-between items-center">
                        About you <textarea {...register("about")} id="about"  rows={3} className=" border rounded-md px-2 w-3/5 text-sm" />
                    </label>
                    {errors.about &&  <p className="error-message  text-red-600 text-xs mx-4 ">{errors.about.message}</p>}
                    
                    

                
                <input type="submit" className=" bg-stone-200 rounded-md w-24 m-4 cursor-pointer" ></input>
            </form>
            
        </div>
       
        

    );
    
}