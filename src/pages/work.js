import React from "react"
import workLogs from '../data/work_logs.json'
import SideBar from "../components/sidebar.js"
import "../styles/global.css"



export default function Table() {
    workLogs.sort((a,b) => {
        const aDate = new Date(a.date)
        const bDate = new Date(b.date)
        return bDate - aDate
    })

    return (
        <>
            <title>Linktera Ailem</title>
            <div className="flex">
                <div className="SideBar">
                    <SideBar />
                </div>
            <div className="table">
            <table>
                <thead>
                    <tr>
                        <th colSpan="5" rowSpan="2"><p>İŞ KAYITLARI</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="1" rowSpan="1"><p>Tarih</p></th>
                        <th colSpan="1" rowSpan="1"><p>Çalışan Numarası</p></th>
                        <th colSpan="1" rowSpan="1"><p>Proje Numarası</p></th>
                        <th colSpan="1" rowSpan="1"><p>Saatler</p></th>
                        <th colSpan="1" rowSpan="1"><p>Açıklama</p></th>
                    </tr>

                    {
                        workLogs.map((item, i) => {
                            return ( <>
                            <tr key={i}>
                                <td colSpan="1" rowSpan="1"><p>{item.date}</p></td>
                                <td colSpan="1" rowSpan="1"><p>{item.employee_id}</p></td>
                                <td colSpan="1" rowSpan="1"><p>{item.project_id}</p></td>
                                <td colSpan="1" rowSpan="1"><p>{item.hours}</p></td>
                                <td colSpan="1" rowSpan="1"><p>{item.description}</p></td>
                            </tr>
                                </>
                            )

                        })
                    }
                </tbody>
            </table>
            </div>
            </div>

        </>
    )
}
