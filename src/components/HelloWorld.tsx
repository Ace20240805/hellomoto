import { UserContext } from "@/contexts/user-context";
import { useContext ,useEffect} from "react";
export default function HelloWorld(){
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('MyComponent must be used within a MyContextProvider');
  }
  const {count ,user, setUser} = context;

  useEffect(() => {
    setUser({compalid:"1234",username:"123",nickname:"123",photoUrl:"123"});
  }, []);
    return(
        <>
           <div>
               <h1>是在哈囉?{count}{user?.compalid}</h1>
           </div>
        </>
   )
}

  export function HelloWorld2({text}:{text:string}){
//export function HelloWorld2(props:WelcomeTextVO){
    //console.log(props);
    return(
        <>
           <div>
               <h1>{text}</h1>
           </div>
        </>
   )
}

export function MainHelloWorld({children}: {children: React.ReactNode}) {
    return (
    <>
      <h1>{children}</h1>    
    </>
    )
    
  }