


export default function RevCard({
    name="restaurnt",
    rating="4.0",
    review="lalalala"
}) {

    return (<div style={{justifyContent:'center',display:'flex', width:"80%", height:135, backgroundColor:'#C5CAA9',padding:10,  borderRadius:20}}>
        
        <div style={{display:'flex', flexDirection:'row'}}>
            <img  style={{display:'flex', width:'45%', height:"80%", marginTop:10, marginLeft:10}} src="place.png"/> 
            <div style={{lineHeight:0.5,paddingLeft:15, color:'#184B4B'}}>
                <h3>{name}</h3>
                <p>{rating}</p>
                <p>{review}</p>
            </div>
        </div>
        


    </div>

    )
}