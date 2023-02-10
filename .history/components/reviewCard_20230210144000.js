


export default function RevCard({
    name="restaurnt",
    rating="4.0",
    review="lalalala"
}) {

    return (<div style={{display:'flex', width:"70%", height:135, backgroundColor:'#C5CAA9',  borderRadius:20}}>
        
        <div style={{display:'flex', flexDirection:'row'}}>
            <img  style={{display:'flex', width:'5%', height:"80%", marginTop:10, marginLeft:10}} src="place.png"/> 
            <div style={{lineHeight:0.5,paddingLeft:15, color:'#184B4B'}}>
                <h3 >{name}</h3>
                <p>{rating}</p>
                <p>{review}</p>
            </div>
        </div>
        


    </div>

    )
}