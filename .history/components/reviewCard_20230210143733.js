


export default function RevCard({
    name="restaurnt",
    rating="4.0",
    review="lalalala"
}) {

    return (<div style={{display:'flex', width:"70%", height:115, backgroundColor:'#C5CAA9',  borderRadius:10}}>
        
        <div style={{display:'flex', flexDirection:'row'}}>
            <img  style={{display:'flex', width:60, height:60, marginTop:10, marginLeft:10}} src="place.png"/> 
            <div style={{paddingLeft:15, color:'#184B4B'}}>
                <p>{name}</p>
                <p>{rating}</p>
                <p>{review}</p>
            </div>
        </div>
        


    </div>

    )
}