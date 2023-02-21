import React from "react"

export default function SubButton({
    bttntxt="find your spot",
    func='function',
    postsPerPage, totalPosts, paginate,
    
}) {

    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


    return(

        {pageNumbers.map(number => (
           
                <Link onClick={() => paginate(number)} className={styles.pag}>
                    {number}
                
           <button onClick={func}
             style={{display:'flex',
         backgroundColor:'#FFB16F',
          borderRadius:10, width:110,
           justifyContent:'center'
           , padding:8, alignContent:'center',
            color:'white', fontWeight:'bold',
            border:'transparent', 
            fontFamily: 'Righteous, cursive'}}>{bttntxt}</button>
            </Link>
        ))}

       
             
       
    )
}