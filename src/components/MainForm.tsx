import { useState } from "react";
import CreateForm from "./CreateForm";
import Option from "./Option";

export default function MainForm() {
  const [options, setOptions] = useState([
    {text:'state',id:Math.random(),isCompleted:false,isEditing:false}, 
    {text:'hook',id:Math.random(),isCompleted:false,isEditing:false}, 
]);

const addOption = (text: string) => {
  setOptions([...options,{text:text,id:Math.random(),isCompleted:false,isEditing:false}]);
}

const deleteOption = (id: number) => {
  setOptions(options.filter((option) => 
      { return option.id !== id
   }));   
}

const toggleComplete = (id: number) => {
  setOptions(options.map((option) => option.id === id ? {...option,isCompleted: !option.isCompleted} : option));
}

const toggleEditing = (id: number) => {
  setOptions(options.map((option) => option.id === id ? {...option,isEditing: !option.isEditing} : option));
}

const editOption = (id: number, newText: string) => {
  setOptions(options.map((option) => option.id === id ? {...option,text:newText,isEditing:false} : option));
}

  return (
    <div className="w-[350px] p-8 bg-blue-500 rounded-md mt-5 text-center">
      <h1>功能解說</h1>
    <CreateForm addOption={addOption} />
    {options.map((option) => {
         return <Option option={option} key={option.id} deleteOption={deleteOption}
          toggleComplete={toggleComplete} toggleEditing={toggleEditing} editOption={editOption}/>
     })}
 

    </div>
  );
}   