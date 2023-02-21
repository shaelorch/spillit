import React from "react";
import styles from '../styles/Home.module.css'

export default function Pagnation({ postsPerPage, totalPosts}){
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav >
            <ul className={styles.pagbar}>
                {pageNumbers.map(number => (
                    <li key={number} className={styles.pag}>
                        <a onClick={() => paginate(number)} href="!#" className={styles.pag}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}