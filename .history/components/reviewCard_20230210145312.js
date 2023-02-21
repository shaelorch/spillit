


export default function RevCard({
    name="restaurnt",
    rating="4.0",
    review="lalalala"
}) {

    return (<div style={{justifyContent:'center',display:'flex', width:"90%", height:'100%', backgroundColor:'#C5CAA9',  borderRadius:20, marginBottom:40, paddingRight:20, paddingBottom:10}}>
        
        <div style={{display:'flex', flexDirection:'row'}}>
            <img  style={{display:'flex', width:'45%', height:"30%", marginTop:"20%", marginLeft:10}} src="place.png"/> 
            <div style={{lineHeight:1,paddingLeft:15, color:'#184B4B'}}>
                <h3>{name}</h3>
                <p>{rating}</p>
                <p>{review}</p>
            </div>
        </div>
        


    </div>

    )
}