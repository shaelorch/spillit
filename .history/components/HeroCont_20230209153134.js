import react from "react";
import { motion } from 'framer-motion';

export default function HeroCont() {

    

    return (<div>
        <img src="dotted.png" style={{display:'flex', position:'relative', width:280, height:280}}/>
        <img src="heropic.png" style={{display:'flex', width:250, height:250, position:'absolute', marginTop:-265, marginLeft:15, }}/>
        <motion.div animate={{
       
        rotateY:90
      }}>
            <img src="words.png" style={{width:358, height:195, marginTop:-160, marginLeft:-40, animation:'rotation 2s infinite linear' }}/>
        </motion.div>
    </div>

    )
}

