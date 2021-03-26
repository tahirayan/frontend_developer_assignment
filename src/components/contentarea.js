import React from "react"
import * as styles from "./contentarea-css-modules.module.css"
import Calendar from 'react-calendar'
import employees from '../data/employees.json'
import burger from "../images/assets/hamburger.svg"
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper';
import slide from "../images/assets/2020 başvuru_duyuru@2x.png"
import callPhone from "../images/assets/send-1@2x.png"
import more from "../images/assets/more.svg"
import news1 from "../images/assets/1@2x.png"
import news2 from "../images/assets/ERD_1373@2x.png"
import news3 from "../images/assets/IMG-20191130-WA0014@2x.png"
import news4 from "../images/assets/Linktera Veri Analitiği Hitachi IDC Türkiye@2x.png"
import ad1 from "../images/assets/sadad@2x.png"
import ad2 from "../images/assets/sadasd@2x.png"

SwiperCore.use([Navigation]);

export default function ContentArea() {
    const birthdayKids = employees.filter((item) => {
        const birthDay = new Date(item.birthday)
        const today = new Date()
        return birthDay.getMonth() === today.getMonth() && birthDay.getDate() === today.getDate()
    })
    employees.sort((a,b) => {
        const aDate = new Date(a.start_date_of_employement)
        const bDate = new Date(b.start_date_of_employement)
        return bDate - aDate
    })

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
                        <div className={styles.slider}>
                            <Swiper
                                slidesPerView={1}
                                navigation>

                                <SwiperSlide><img src={slide} /></SwiperSlide>
                                <SwiperSlide><img src={slide} /></SwiperSlide>
                                <SwiperSlide><img src={slide} /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className={styles.newsArea}>
                            <span>HABERLER</span>
                            <div className={styles.flex1}>
                                <div className={styles.news}>
                                    <img src={news1} alt={""}/>
                                    <span>
                                            <a href={"#"}>Veri Analitiği Etkinliği</a>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit  amet</p>
                                            </span>
                                </div>
                                <div className={styles.news}>
                                    <img src={news2} alt={""}/>
                                    <span>
                                            <a href={"#"}>Kış Sporları Kulübü Palandöken'de!</a>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit  amet</p>
                                            </span>
                                </div>
                            </div>
                            <div className={styles.flex2}>
                                <div className={styles.news}>
                                    <img src={news3} alt={""}/>
                                    <span>
                                            <a href={"#"}>Yelken Kulübü Antrenmanda!</a>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit  amet</p>
                                    </span>
                                </div>
                                <div className={styles.news}>
                                    <img src={news4} alt={""}/>
                                    <span>
                                            <a href={"#"}>Veri Analitiği Etkinliği</a>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit  amet</p>
                                            </span>
                                </div>
                            </div>
                            <button>Daha Fazlası <img src={more} alt={""}/> </button>
                        </div>
                        <div className={styles.bottomCards}>
                            <div className={styles.phone}>
                                <h3>TELEFON REHBERİ</h3>
                            </div>
                            <div className={styles.documents}>
                                <h3>DÖKÜMANLAR</h3>
                            </div>
                            <div className={styles.revisions}>
                                <h3>GERİ DÖNÜŞLER</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentMiddle}>
                        <div className={styles.birthdays}>
                            <span>DOĞUM GÜNLERİ</span>
                            <div className={styles.names}>

                                {
                                    birthdayKids.map((item, i) => {
                                        return (
                                            <div key={i} className={styles.nameCards}>
                                                <img src={item.avatar} alt={""}/>
                                                <p><span>{item.first_name} {item.last_name}</span><br />
                                                    <a href={`mailto:${item.email}`}>{item.email}</a>
                                                    <a href={`tel:${item.phone_number}`}>Doğum Gününü Kutla <img src={callPhone} alt={""} /></a>
                                                </p>
                                            </div>
                                        )

                                    })
                                }
                                {
                                    birthdayKids.length > 3 ? <button>Daha Fazlası <img src={more} alt={""}/> </button> : ''
                                }
                                {
                                    birthdayKids.length === 0 ? <p className={styles.noone}>Bugün kimsenin doğum günü değil 😞</p> : ''
                                }

                            </div>
                        </div>
                        <div className={styles.newMembers}>
                            <div className={styles.names}>
                                <span>ARAMIZA KATILANLAR</span>
                                {
                                    employees.map((item, i) => {
                                        return (
                                            <div key={i} className={styles.nameCards}>
                                                <img src={item.avatar} alt={""}/>
                                                <p><span>{item.first_name} {item.last_name}</span><br />
                                                    <a href={`mailto:${item.email}`}>{item.email}</a>
                                                </p>
                                            </div>
                                        )

                                    })
                                        .slice(0,3)
                                }
                                <button>Daha Fazlası <img src={more} alt={""}/> </button>
                            </div>

                        </div>
                        <div className={styles.statementOfExpense}>
                            <h3>MASRAF BİLDİRİMİ</h3>
                        </div>
                    </div>
                    <div className={styles.contentRight}>
                        <div className={styles.calendar}>
                            <Calendar />
                        </div>
                        <div className={styles.openPositions}>
                            <span>AÇIK POZİSYONLAR</span>
                            <div className={styles.positions}>
                                <h3>Senior .Net Software
                                    Developer</h3>
                                <h3>Senior .Net Software
                                    Developer</h3>
                                <h3>Senior .Net Software
                                    Developer</h3>
                                <button>Daha Fazlası <img src={more} alt={""}/> </button>
                            </div>
                        </div>
                        <div className={styles.advertisements}>
                            <span>İLANLAR</span>
                            <img src={ad1} alt={""}/>
                            <img src={ad2} alt={""}/>
                            <button>Daha Fazlası <img src={more} alt={""}/> </button>
                        </div>
                    </div>
                </div>
        </>
    )
}
