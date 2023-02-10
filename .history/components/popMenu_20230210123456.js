import { GrClose } from 'react-icons/gr';
import Link from 'next/link';

export default function PopMenu() {

    return (<div style={{display:'flex', position:'absolute',
    backgroundColor: '#C5CAA9',borderRadius:10, width: '60%', height:'50%', right:0, top:0, zIndex:1}}>
        <ul>
            <GrClose size="25" color="#184B4B" />
            <div style={{lineHeight:3, color:"#184B4B", fontFamily:'righteous, cursive'}}>
                 <Link href={'/'}><h3>HOME</h3>
                 </Link>
                <h3>FIND YOUR NEW SPOT</h3>
            </div>
           
        </ul>


    </div>

    )
}