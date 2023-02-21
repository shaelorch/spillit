import React from "react";
import styles from '../styles/Home.module.css'

export default function Pagnation({ postsPerPage, totalPosts}){
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav >
            <ul className="pagnation">
                {pageNumbers.map(number => (
                    <li key={number} className={styles.pag}>
                        <a href="!#" className={styles.pag}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}