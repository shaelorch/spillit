
export default function Button({
    bttntxt="find your spot"
}) {

    return(
        <button style={{display:'flex', backgroundColor:'#184B4B', borderRadius:10, width:120}}>{bttntxt}</button>
    )
}