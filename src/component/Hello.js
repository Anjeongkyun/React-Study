import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {

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
    <p>Hello</p>
    <World />
    <div className={styles.box}>Hello</div>
    <button onClick={showName}> show name</button>
    <button onClick={showAge}> show age</button>
    <input type="text" onChange={showText}></input>
    </div>  
    );
}