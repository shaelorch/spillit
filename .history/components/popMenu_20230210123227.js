import { GrClose } from 'react-icons/gr';

export default function PopMenu() {

    return (<div style={{display:'flex', position:'absolute',
    backgroundColor: '#C5CAA9',borderRadius:10, width: '60%', height:'50%', right:0, top:0, zIndex:1}}>
        <ul>
            <GrClose size="25" color="#C5CAA9" />
            <div style={{lineHeight:5}}>
                 <p>HOME</p>
                <p>FIND YOUR NEW SPOT</p>
            </div>
           
        </ul>


    </div>

    )
}