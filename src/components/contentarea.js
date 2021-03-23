import React from "react"
import * as styles from "./contentarea-css-modules.module.css"
import burger from "../images/assets/play_arrow-1@2x.png"

export default function ContentArea() {
    return (
        <>
            <div className={styles.contentArea}>
                <div className={styles.topBar}>
                    <h3>Merhaba Anıl, Hoş Geldin !</h3>
                    <div className={styles.searchBar}>
                        <input
                        type="text"
                        id="header-search"
                        name="s"
                        />
                    <button type="submit">Search</button>
                    </div>
                    <img src={burger}/>
                </div>
                <div>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}