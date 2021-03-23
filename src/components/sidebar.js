import React from "react"
import * as styles from "./sidebar-css-modules.module.css"
import logo from "../images/assets/Linktera_Ailem_Logo@2x.png"
import photo from "../images/assets/img-ar-ge-ve-urun-yonetimi-8305_large@2x.png"
import arrow from "../images/assets/play_arrow-1@2x.png"
import right from "../images/assets/keyboard_arrow_right-1.png"

export default function Sidebar() {
    return ( <>
        <div className={styles.sideBar}>
            <div className={styles.sideBarWrapper}>
                <div className={styles.imgWrapper}>
                    <img src={logo} className={styles.logo} alt={"Linktera Ailem"} />
                    <img src={photo} className={styles.photo} alt={"Anıl Tangül"} />
                </div>
                <div className={styles.info}>
                    <h2>Deniz Arkan</h2>
                    <p>Ürün Yönetimi Direktör</p>
                </div>

                <nav className={styles.nav}>
                    <div className={styles.buttonWrapper}>
                    <img src={arrow} alt={""} />
                    <button className={styles.accordion}>Linktera Hakkında</button>
                    </div>
                    <div className={styles.panel}>
                        <img src={right} alt={""} /><a href={"https://www.linktera.com.tr/"} className={styles.links}>Linktera Websitesi</a>
                        <img src={right} alt={""} /><a href={"https://www.linkedin.com/company/linktera/"} className={styles.links}>LinkedIn Hesabı</a>
                        <img src={right} alt={""} /><a href={"https://www.youtube.com/channel/UCLso6-PsSNgnSU1ZW2Fva7Q"} className={styles.links}>Youtube Kanalı</a>
                        <img src={right} alt={""} /><a href={"https://www.linktera.com.tr/"} className={styles.links}>Oryantasyon Sunumu</a>
                    </div>
                    <div className={styles.wrapper}>
                        <img src={arrow} alt={""} />
                        <button className={styles.accordion}>Zaman Girişi</button>
                    </div>
                    <div className={styles.wrapper}>
                        <img src={arrow} alt={""} />
                        <button className={styles.accordion}>İzinlerim</button>
                    </div>
                    <div className={styles.wrapper}>
                        <img src={arrow} alt={""} />
                        <button className={styles.accordion}>Bilgi Bankası</button>
                    </div>
                    <div className={styles.wrapper}>
                        <img src={arrow} alt={""} />
                        <button className={styles.accordion}>ArGe Portalı</button>
                    </div>
                    <div className={styles.wrapper}>
                        <img src={arrow} alt={""} />
                        <button className={styles.accordion}>Mesajlar</button>
                    </div>
                    <div className={styles.wrapper}>
                        <img src={arrow} alt={""} />
                        <button className={styles.accordion}>Yardım</button>
                    </div>
                </nav>
                <div className={styles.logout}>
                    <p>Çıkış</p><svg xmlns="http://www.w3.org/2000/svg" width="23.238" height="33.977" viewBox="0 0 23.238 33.977">
                    <path id="Path_6" data-name="Path 6" d="M161.949,487.4v27.618l16,6.359V492.443H165.019v-1.754h15.125v24.33h5.042V487.4Zm5.563,14.509a.79.79,0,0,1,.791-.789h2.132a.794.794,0,0,0,.791-.791.79.79,0,0,1,1.345-.563l3.353,3.326-3.353,3.324a.777.777,0,0,1-.552.23.788.788,0,0,1-.793-.793.79.79,0,0,0-.791-.789H168.3a.79.79,0,0,1-.791-.789Z" transform="translate(-161.949 -487.401)" fill="#fff"/>
                </svg>
                </div>
            </div>
        </div>
        </>
)
}
