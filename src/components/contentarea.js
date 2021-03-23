import React from "react"
import * as styles from "./contentarea-css-modules.module.css"
import burger from "../images/assets/hamburger.svg"
import slide from "../images/assets/2020 başvuru_duyuru@2x.png"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import JSONEmployees from "../data/employees.json"

export default function ContentArea() {
    return (
        <>
                <div className={styles.topBar}>
                    <h3>Merhaba Anıl, Hoş Geldin !</h3>
                    <div className={styles.topBarRight}>
                        <div className={styles.searchBar}>
                            <input
                            type="text"
                            id="header-search"
                            name="s"
                            />
                            <button type="submit"> </button>
                        </div>
                        <img src={burger} alt={""} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentLeft}>
                        <div className={styles.contentLeftTop}>
                            <div className={styles.slider}>
                                <Helmet>
                                    <script src={withPrefix('script.js')} type="text/javascript" />
                                </Helmet>
                                <div className="slides">
                                    <div className={styles.slidesHeader}>Duyurular</div>
                                    <img src={slide} style={{width: "max-width: 812px" ,
                                        height: "408px"}}/>
                                </div>

                                <a className={styles.prev} onClick="plusSlides(-1)">&#10094;</a>
                                <a className={styles.next} onClick="plusSlides(1)">&#10095;</a>
                            </div>
                            <div className={styles.birthdays}>
                                <h3>Doğum Günleri</h3>
                                <div className={styles.employeeAvatar}>
                                    {JSONEmployees.map((data, index) => {
                                        return <img key={`_${index}`}>{data.avatar}</img>
                                    })}
                                </div>

                            </div>

                        </div>
                        <div className={styles.contentLeftMiddle}>
                            <div className={styles.news}>

                            </div>
                            <div className={styles.newMembers}>

                            </div>

                        </div>
                        <div className={styles.contentLeftBottom}>
                            <div className={styles.phone}>

                            </div>
                            <div className={styles.documents}>

                            </div>
                            <div className={styles.revisions}>

                            </div>
                            <div className={styles.statementOfExpense}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.contentRight}>
                        <div className={styles.calendar}>

                        </div>
                        <div className={styles.openPoisitons}>

                        </div>
                        <div className={styles.advertisements}>

                        </div>
                    </div>
                </div>
        </>
    )
}