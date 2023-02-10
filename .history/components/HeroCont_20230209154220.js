import react from "react";
import { motion } from 'framer-motion';

export default function HeroCont() {

    

    return (<div>
        <img src="dotted.png" style={{display:'flex', position:'relative', width:280, height:280}}/>
        <img src="heropic.png" style={{display:'flex', width:250, height:250, position:'absolute', marginTop:-265, marginLeft:15, }}/>
        <motion.div   
  animate={{rotate: 360}}
  transition={{ duration: 8 , times: [0, 0.2, 1] }}>
            <img src="wordcircle.png" style={{width:435, height:405, marginTop:-262, marginLeft:-75, animation:'rotation 2s infinite linear' }}/>
        </motion.div>
    </div>

    )
}

