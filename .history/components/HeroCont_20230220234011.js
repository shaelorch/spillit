import react from "react";
import { motion } from 'framer-motion';
import Image from "next/image";

export default function HeroCont() {

    

    return (<div style={{justifyContent:'center', display:'flex', paddingBottom:80}}>
        
        <Image alt="hello" src="dotted.png" style={{display:'flex', position:'relative', width:280, height:280, marginTop:-15}}/>
        <Image alt="hello" src="heropic.png" style={{display:'flex', width:250, height:250, position:'absolute' }}/>
        <Image alt="hello" src="wordcircle.png" style={{width:440, height:410,position:'absolute', animation:'rotation 2s infinite linear' }}/>
        
    </div>
    )
}

