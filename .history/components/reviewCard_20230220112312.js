


export default function RevCard({
    name="restaurnt",
    rating="4.0",
    review="lalalala"
}) {

    return (<div style={{justifyContent:'center',display:'flex', width:"90%", height:'100%', backgroundColor:'#C5CAA9',  borderRadius:20, marginBottom:40, paddingRight:20, paddingBottom:8}}>
        
        <div style={{display:'flex', flexDirection:'row', height:'100%', padding:10}}>
            <img  style={{display:'flex', width:'15%', height:"15%", marginTop:"4%", marginLeft:10}} src="Popular.png"/> 
            <div style={{lineHeight:1.2,paddingLeft:25, color:'#184B4B'}}>
                <h2 style={{fontFamily:'righteous, cursive'}}>{name}</h2>
                <h3 style={{fontFamily:'righteous, cursive'}}>{rating}</h3>
                <p>{review}</p>
            </div>
        </div>
        


    </div>

    )
}