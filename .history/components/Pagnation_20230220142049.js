import React from "react";

const Pagnation = ({ postsPerPage, totalPosts}) => {
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagnation">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}