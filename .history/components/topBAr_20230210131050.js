import Link from "next/link"
import { useState } from "react"

export default function TopBar() {

    const [open, setOpen] = useState(true);

    const handleClickClose = () => {
        setOpen(current => !current);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#779680' }}>
            <Link href='/'>
                <h2 style={{ color: '#C5CAA9', fontFamily: 'righteous, cursive' }}>spill it</h2>
            </Link>
            <img 
            onClick={handleClickClose} style={{ height: 50, width: 50 }} src="menu.png" />


        </div>

            )
        }