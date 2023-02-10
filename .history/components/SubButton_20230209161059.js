
export default function SubButton({
    bttntxt="find your spot",
    
}) {

    return(
        <button style={{display:'flex',
         backgroundColor:'#FFB16F',
          borderRadius:10, width:110,
           justifyContent:'center'
           , padding:8, alignContent:'center',
            color:'#C5CAA9', fontWeight:'bold',
            border:'transparent'}}>{bttntxt}</button>
    )
}