import Link from "next/link"
import { useEffect, useState } from "react"
import { GrClose } from 'react-icons/gr'
import PopMenu from "./popMenu";
import Image from "next/image";

export default function TopBar() {

    const [open, setOpen] = useState(false);

   const onClick = () => {
    setOpen(current => !current);
   };

   

    return (
        <><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#779680' }}>
            <Link href='/'>
                <h2 style={{ color: '#C5CAA9', fontFamily: 'righteous, cursive' }}>spill it</h2>
            </Link>
            <Image
                onClick={onClick} alt="hello" style={{ height: 50, width: 50 }} src="menu.png" />
            {open ? <PopMenu/> : null}

        </div></>

            )
        }