import React from "react";

export default function Pagnation({ postsPerPage, totalPosts}){
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagnation">
                {pageNumbers.map(number => (
                    <p key={number} className="page-item">
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </p>
                ))}
            </ul>
        </nav>
    )
}