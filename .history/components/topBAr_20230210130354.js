import Link from "next/link"

export default function TopBar() {

    

    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', backgroundColor:'#779680'}}>
            <Link href='/'>
                <h2 style={{color:'#C5CAA9', fontFamily:'righteous, cursive'}}>spill it</h2>
             </Link>
                <img style={{height:50, width:50}} src="menu.png"/>

           
        </div>
    )
}