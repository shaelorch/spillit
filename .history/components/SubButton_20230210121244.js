
export default function SubButton({
    bttntxt="find your spot",
    
}) {

    return(
        <div style={{paddingTop:30}}>
             <button style={{display:'flex',
         backgroundColor:'#FFB16F',
          borderRadius:10, width:110,
           justifyContent:'center'
           , padding:8, alignContent:'center',
            color:'white', fontWeight:'bold',
            border:'transparent', 
            fontFamily: 'Righteous, cursive'}}>{bttntxt}</button>
        </div>
       
    )
}