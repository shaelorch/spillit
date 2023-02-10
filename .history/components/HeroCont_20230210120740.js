import react from "react";
import { motion } from 'framer-motion';

export default function HeroCont() {

    

    return (<div style={{justifyContent:'center', display:'flex'}}>
        
        <img src="dotted.png" style={{display:'flex', position:'relative', width:280, height:280, marginTop:-13}}/>
        <img src="heropic.png" style={{display:'flex', width:250, height:250, position:'absolute' }}/>
        <img src="wordcircle.png" style={{width:435, height:405,marginRight:'50%',position:'absolute', animation:'rotation 2s infinite linear' }}/>
        
    </div>
    )
}

