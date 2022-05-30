import React from "react";
import { footerData } from './data';
import Link from "next/link";
import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="row">
                    {
                        footerData.categories.map(elem => {
                            return (
                                <div className="col-sm-6 col-md-4">
                                    <h4 style={{
                                        color: "white",
                                        textTransform: "uppercase",
                                        fontSize: "1rem",
                                        letterSpacing: "1px",
                                        lineHeight: "2rem",
                                        marginBottom: "1rem"
                                    }}>{elem.title}</h4>
                                    <ul>
                                        {
                                            elem.items.map(el => {
                                                return (
                                                    <Link href={el.link}>
                                                        <li style={{
                                                            color: "white",
                                                            marginBottom: ".75rem",
                                                            cursor: "pointer"
                                                        }}>{el.title}</li>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </footer>
    );
}

export default Footer;
