import { GrClose } from 'react-icons/gr';
import Link from 'next/link';
import { useState } from 'react';

export default function PopMenu() {

    const [close, setClose] = useState(true);

    const handleButtonClick = () => {
        close(current => !current);
    }


    return ( 
        <div style={{display: setClose ? 'flex' : 'none', position:'absolute',
    backgroundColor: '#C5CAA9',borderRadius:10, width: '60%', height:'50%', right:0, top:0, zIndex:1}}>
        <ul>
            <GrClose size="25" color="#184B4B"
            onClick={handleButtonClick}/>
            <div 
          
            style={{lineHeight:3, color:"#184B4B",
             fontFamily:'righteous, cursive'}}>
               
                 <Link href={'/'}><h3>HOME</h3>
                 </Link>
                <Link href={"/findASpot"}><h3>FIND YOUR NEW SPOT</h3>
                </Link>
            </div>
           
        </ul>


    </div>

    
  
    
    

              
    )
}