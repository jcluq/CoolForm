import { useEffect, useState } from "react";
import { CvForm } from "./components/CvForm";
import { Cv } from "./components/Cv";



interface PersonalData {
  name: string;
  email: string;
  about: string;
}

function App() {

  const [personalInfo,setPersonalInfo] = useState<PersonalData>( {
    name: "juan",
    email: "whatever",
    about: "blabla"
  });

  const handlePersonalInfo = (data:PersonalData) => {
    
    setPersonalInfo(data);
    console.log(personalInfo);
    
  };


  return (
    <div className="App flex h-screen" >
      <CvForm setFunction={handlePersonalInfo} /> 
      <Cv pInfo = {personalInfo}/>
      
    </div>
  );
}

export default App;
