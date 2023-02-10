
export default function Button({
    bttntxt="find your new spot",
    color="#C5CAA9"
}) {

    return(
        <button style={{display:'flex',
         backgroundColor:'#184B4B',
          borderRadius:10, width:110,
           justifyContent:'center'
           , padding:10, alignContent:'center',
            color:'#C5CAA9', fontWeight:'bold',
            border:'transparent', fontFamily: 'Righteous, cursive'}}>{bttntxt}</button>
    )
}