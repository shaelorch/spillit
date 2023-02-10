import { GrClose } from 'react-icons/gr';

export default function PopMenu() {

    return (<div style={{display:'flex', position:'absolute',
    backgroundColor: '#C5CAA9', width: '60%', height:'80%', right:0, top:0, zIndex:1}}>
        <ul>
            <GrClose size={medium}/>
            <p></p>
            <p></p>
        </ul>


    </div>

    )
}