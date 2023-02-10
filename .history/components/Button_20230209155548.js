
export default function Button({
    bttntxt="find your spot"
}) {

    return(
        <button style={{display:'flex',
         backgroundColor:'#184B4B',
          borderRadius:10, width:110,
           justifyContent:'center'
           , padding:8, alignContent:'center',
            color:'#C5CAA9', fontWeight:'bold',
            border:'transparent',
            boxShadow: '0, 4, 4 grey'}}>{bttntxt}</button>
    )
}