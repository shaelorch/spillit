import React from "react"
import Link from "next/link";

export default function SubButton({
    bttntxt="find your spot",
   
    postsPerPage, totalPosts, paginate
    
}) {

    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


    return(<div>

        {pageNumbers.map(number => (
           
                
           <button onClick={() => paginate(number)}
             style={{display:'flex',
         backgroundColor:'#FFB16F',
          borderRadius:10, width:110,
           justifyContent:'center'
           , padding:8, alignContent:'center',
            color:'white', fontWeight:'bold',
            border:'transparent', 
            fontFamily: 'Righteous, cursive'}}>{bttntxt}</button>
        
        ))}

       </div>
             
       
    )
}