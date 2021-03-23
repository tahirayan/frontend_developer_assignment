import React from "react"
import SideBar from "../components/sidebar.js"
import ContentArea from "../Components/contentarea.js"
import "../styles/global.css"

export default function Home() {
  return ( <>
    <title>Linktera Ailem</title>
    <div className="flex">
      <div className="SideBar">
        <SideBar />
      </div>
      <div className="ContentArea">
        <ContentArea />
      </div>
    </div>

  </> )
}
