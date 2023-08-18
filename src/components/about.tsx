

export const About = () => {
    

    return (
        <div className="cvform flex flex-col  bg-emerald-300 p-2 m-4  rounded-lg max-h-fit shadow-lg">
            <p className=" text-sm font-medium m-auto p-2">CoolForm</p>
            
            <div className=" m-3 ">
                <p className=" text-xs mx-2 text-justify"> 
                This CV generator is built with React, using the React-Hook-Form library. 
                <br />
                <br />
                The app holds 3 mayor states: personalData, educationData and professionalData. These are updated from the information of each of the children when each submitted button is pressed. 
                <br />
                <br />
                Typescript is used to maintain type consistency in the code, and the Yup Library for run-time validation.
                </p>
                <p className=" text-xs m-2"> Check the code in the <a href="https://github.com/jcluq/CoolForm" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">github repository</a> </p>
                <p className=" text-xs m-2 mt-3 text-end"> Juan Luque, 2023</p>
            </div>
        </div>
    )
};
