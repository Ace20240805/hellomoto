import { MdDeleteForever,MdOutlineEdit } from "react-icons/md"
import EditForm from "./EditForm";
import { OptionProps } from "@/types/option";
/*
interface OptionProps {
    option: {
      id: number;
      text: string;
      isCompleted: boolean;
      isEditing: boolean;
    },
    deleteOption: (id: number) => void,
    toggleComplete: (id: number) => void,
    toggleEditing: (id: number) => void,
    editOption: (id: number, text: string) => void,
  }
*/
//export default function Option({option,deleteOption}:{option: {
//    id: number,text: string
 // }, deleteSubject: (id: number) => void}) {
  
  export default function Option({option,deleteOption,toggleComplete,toggleEditing,editOption}: OptionProps) {
    return (
        option.isEditing ? (<EditForm option={option} editOption={editOption}/>) : <div className={`option ${option.isCompleted ? "completed" : ""} `}>
                <p onClick={() => {toggleComplete(option.id)}}>{option.text}</p>
            
                <div className="flex space-x-1">
                <MdOutlineEdit  onClick={() => {toggleEditing(option.id)}} className="hover:cursor-pointer" />
                <MdDeleteForever onClick={() => deleteOption(option.id)} className="hover:cursor-pointer" />
                </div>
            </div>
    )
}