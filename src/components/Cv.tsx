

interface PersonalData {
    name: string;
    email: string;
    about: string;
}

interface Props {
    pInfo:PersonalData;
}



export const Cv = (props:Props) => {
    

    return (
        <div className="cvform flex flex-col bg-slate-100 p-5 m-4 w-1/3 h-4/5 rounded-lg">
            <h1 className=" font-bold text-xl">{props.pInfo.name}</h1>
            <h3> Media artist</h3>
        </div>
    )
}