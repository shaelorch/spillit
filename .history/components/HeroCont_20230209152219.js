import react from "react";
import styles from "../styles/Home.module.css";

export default function HeroCont() {

    

    return (<div>
        <img src="dotted.png" style={{display:'flex', position:'relative', width:280, height:280}}/>
        <img src="heropic.png" style={{display:'flex', width:250, height:250, position:'absolute', marginTop:-265, marginLeft:15, }}/>
        <img src="words.png" className={styles.rotate}/>
    </div>

    )
}

