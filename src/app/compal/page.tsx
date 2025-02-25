'use client';
import HelloWorld,{HelloWorld2,MainHelloWorld} from "@/components/HelloWorld";
import { useState,useEffect } from "react";
import { UserContextProvider } from "@/contexts/user-context";
import { useContext } from "react";
import { UserContext } from "@/contexts/user-context";

function ClickComponent({clicks} : {clicks:number}) {
    return (
      <div>
       Clicks: {clicks}
      </div>
    );  
  }

  function TimesComponent(){
    //let clicks = 0;
    const [clicks, setClicks] =  useState(0);
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('MyComponent must be used within a MyContextProvider');
    }
    const {count, setCount } = context;
    
    useEffect(() => {
        console.log(clicks);
    }, [clicks]); 
  
    const handleClick = () => {
       setClicks(count+1);
       setCount(count+1);
       //console.log(clicks);
    }
  
    return (
      <>
        <button className="px-4 py-2 border rounded-md bg-blue-200 hover:bg-blue-500 " 
        onClick={handleClick}>幾次: {clicks}</button> 
      </>
    );
  }
function Page(){
    const text = "Hello World!";
    //let clicks = 0;
    const [clicks, setClicks] =  useState(0);
    const handleClick = () =>{
        //alert("hello");
        //clicks++;
        setClicks(clicks+1);
        console.log(clicks);
    }
 
    const listItems =[
        <TimesComponent key="0" />,
        <TimesComponent key="1" />,
        <TimesComponent key="2" />,
        //<HelloWorld key="0"/>,
        //<HelloWorld key="1" />,
        //<HelloWorld key="2"/>,
        //<HelloWorld key="3" />,
    ];
  
    const listItems2 =[
        {text:'000',id:'21'},
        {text:'111',id:'22'},
        {text:'222',id:'23'},
    ];

    const filterItems = listItems2.filter((item) => {
        if(item.text !== '000'){
          //console.log(item.text);
          return true;
        }
      })

      const listItems3 =[
        <HelloWorld2 key="a0" text="是"/>,
        <HelloWorld2 key="a1" text="在"/>,
        <HelloWorld2 key="a2" text="哈"/>,
        <HelloWorld2 key="a3" text="囉"/>,
        <HelloWorld2 key= "a4" text="?"/>,
    ];

    return(
        <UserContextProvider>
         <ClickComponent clicks={clicks}/>
            <input type="text" placeholder={text.toUpperCase()} 
            className="w-100 h-10 border border-red-500 rounded-md" />
            <button onClick={handleClick} 
            className="px-4 py-2 border rounded-md bg-red-100 hover:bg-red-500">Click:{clicks}</button>
            <p></p>
            {listItems}
            {listItems2.map((item) => {return <div key={item.id}>{item.text}</div>})}
            {filterItems.map((item) => {return <div key={item.id}>{item.text}</div>})}
            <div className={`text-white ${1!==1 ? "bg-red-500" : "bg-blue-500"}`} >
            {true ? <h1>No</h1> : <h1>Yes</h1>}
            {false && <h1>Yes</h1>}
             </div>
             {listItems3}
         
            <MainHelloWorld>
                <HelloWorld/>
            </MainHelloWorld>
         </UserContextProvider>
    )
}

export default Page;