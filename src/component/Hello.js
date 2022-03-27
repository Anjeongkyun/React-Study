import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}) {
    console.log(age);
    const msg = age > 19 ? "성인" : "미성년자";
    // let name = "Mike";
    
    //[변수명, 변경해주는 함수]
    const [name, setName] = useState('Mike');

    function changeName() {
        // name = name ==="Mike" ? "Jane" : "Mike";
        // document.getElementById("name").innerText = name;

        const newName = name ==="Mike" ? "Jane" : "Mike";
        console.log(name);
        setName(newName);

    }

    function showName(){
        console.log("jkan");
    }

    function showAge(){
        console.log("27");
    }

    function showText(e){
        console.log(e.target.value);
    }

    return (              
    <div>
    {/* <p>Hello</p> */}
    {/* <World /> */}
    {/* <div className={styles.box}>Hello</div> */}
    <br></br>

    <button onClick={showName}> show name</button>
    <br></br>

    <button onClick={showAge}> show age</button>
    <br></br>

    <input type="text" onChange={showText}></input>
    <br></br>

    <h2 id="name">{name}({age}) : {msg}</h2>
    <UserName name = {name} />
    <button onClick = {changeName}>Change</button>
    <br></br>
<hr></hr>
    </div>  
    );
}