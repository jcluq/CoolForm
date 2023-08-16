import { PersonalData } from "../interfaces";


interface EducationData {
    id:number;
    school: string;
    title: string;
    year: {
        start: number;
        end : number;
    }
}


  
  interface EducationDataArray extends Array<EducationData> {};

interface Props {
    pInfo: PersonalData;
    educationInfo: EducationDataArray;
    professionalInfo: any;
}



export const Cv = (props: Props) => {


    return (
        <>
            <div className="cvform flex flex-col bg-slate-100 p-8 m-4 w-1/3 h-4/5 rounded-lg">
                <h1 className=" font-bold text-xl">{props.pInfo.name}</h1>
                {props.pInfo.phone != 0 && <h3 className=" text-sm italic"> {props.pInfo.phone}</h3>}
                <h3 className=" text-sm italic "> {props.pInfo.email}</h3>
                <p className=" text-sm my-3 break-words "> {props.pInfo.about}</p>
                <h2 className="my-3 font-bold text-base">Education :</h2>

                {props.educationInfo.map((info: EducationData) =>
                    <div key={info.id} className=" my-2">
                        <h3 className=" text-sm">{info.school}, {info.year?.start} - {info?.year?.end}</h3>
                        <h3 className=" text-sm">{info?.title}</h3>
                    </div>
                )}
                <h2 className="my-3 font-bold text-base">Professional Experience :</h2>

                {props.professionalInfo.map((info: any) =>
                    <div key={info.id} className=" my-2">
                        <h3 className=" text-sm">{info.workplace}, {info.year?.startP} - {info?.year?.endP}</h3>
                        <h3 className=" text-sm">{info?.position}</h3>
                        <h3 className=" text-sm">{info?.description}</h3>
                    </div>
                )}



            </div>
        </>
    )
}