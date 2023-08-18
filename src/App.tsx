import { useEffect, useState,} from "react";
import { PersonalDataForm } from "./components/personalData";
import { Cv } from "./components/Cv";
import { EduForm } from "./components/edu/eduForm";
import { ProfessionalExpForm } from "./components/professionalExp/professionalExpForm";
import { PersonalData } from "./interfaces";
import { About } from "./components/about";

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


function App() {

  const [personalInfo,setPersonalInfo] = useState<PersonalData | undefined>( );

  const [eduInfo, setEduInfo] = useState<EducationDataArray>([]);

  const [professionalInfo, setProfessionalInfo] = useState<any>([]);

  const handlePersonalInfo = (data:PersonalData) => { 
    setPersonalInfo(data);
  };

  const handleEductationInfo = (data:EducationData[]) => {
    setEduInfo(data);
  }

  const handleProfessionalInfo = (data:any) => {
    setProfessionalInfo(data);
  }

  useEffect(() => {
    //console.log(professionalInfo); 
  }, []); 

  return (
    <>
    
    <div className="App flex h-screen justify-center" >

    
        <div className=" w-3/12">
        <PersonalDataForm setFunction={handlePersonalInfo} /> 
        <EduForm setFunction={handleEductationInfo}/>
        </div>
        <Cv pInfo = {personalInfo} educationInfo={eduInfo} professionalInfo ={professionalInfo}/>
        <div className=" w-3/12">
          
          <ProfessionalExpForm setFunction={handleProfessionalInfo}/>
          <About/>
        </div>
      
      </div>
    </>
  );
}

export default App;
