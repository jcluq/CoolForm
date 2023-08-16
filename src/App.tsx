import { useEffect, useState,} from "react";
import { CvForm } from "./components/CvForm";
import { Cv } from "./components/Cv";
import { EduForm } from "./components/edu/eduForm";
import { ProfessionalExpForm } from "./components/professionalExp/professionalExpForm";
import { PersonalData } from "./interfaces";

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

  const [personalInfo,setPersonalInfo] = useState<PersonalData>( {
    name: "Name",
    phone:  123456789,
    email: "example@example.com", 
    about: "Some text about yous bdkjfkjf  asdsadasdskfjsf jsdklj; slfkjds ;fj;sadjvfadivfa svfna sjvnhfadnh vflaka bdkjfkjf  asdsadasdskfjsf jsdklj; slfkjds ;fj;sadjvfadivfa svfna sjvnhfadnh vflakabdkjfkjf  asdsadasdskfjsf jsdklj; slfkjds ;fj;sadjvfadivfa svfna sjvnhfadnh vflaka"
  });

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
    <div className="App flex h-screen" >
      <div className=" w-3/12">
      <CvForm setFunction={handlePersonalInfo} /> 
      <EduForm setFunction={handleEductationInfo}/>
      </div>
      <Cv pInfo = {personalInfo} educationInfo={eduInfo} professionalInfo ={professionalInfo}/>
      <div className=" w-3/12">
        
        <ProfessionalExpForm setFunction={handleProfessionalInfo}/>
        
      </div>
    </div>
  );
}

export default App;
