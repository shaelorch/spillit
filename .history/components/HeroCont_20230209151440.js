import react from "react";

export default function HeroCont() {

    return (<div>
        <img src="dotted.png" style={{display:'flex', position:'relative', width:280, height:280}}/>
        <img src="heropic.png" style={{display:'flex', width:250, height:250, position:'absolute', marginTop:-265, marginLeft:15, }}/>
        <img src="words.png" style={{width:330, height:190, marginTop:-160, marginLeft:-30}}/>
    </div>

    )
}