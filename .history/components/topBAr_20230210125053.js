import Link from "next/link"
import { useState } from "react";
import { GrClose } from 'react-icons/gr';

export default function TopBar() {

    const [open, setOpen] = useState(true);

    const handleButtonClick = () => {
        setOpen(false);
        open(true);
    }

    return (<><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#779680' }}>
            <Link href='/'>
                <h2 style={{ color: '#C5CAA9', fontFamily: 'righteous, cursive' }}>spill it</h2>
            </Link>
            <img style={{ height: 50, width: 50 }} src="menu.png" />


        </div><div style={{
            display: open ? 'flex' : 'none', position: 'absolute',
            backgroundColor: '#C5CAA9', borderRadius: 10, width: '60%', height: '50%', right: 0, top: 0, zIndex: 1
        }}>
                <ul>
                    <GrClose size="25" color="#184B4B"
                        onClick={handleButtonClick} />
                    <div

                        style={{
                            lineHeight: 3, color: "#184B4B",
                            fontFamily: 'righteous, cursive'
                        }}>

                        <Link href={'/'}><h3>HOME</h3>
                        </Link>
                        <Link href={"/findASpot"}><h3>FIND YOUR NEW SPOT</h3>
                        </Link>
                    </div>

                </ul>


            </div></>
    
    )
}