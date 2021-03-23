import React from "react"
import Sidebar from "../components/sidebar.js"
import ContentArea from "../Components/contentarea.js"
import * as styles from "../styles/global.css"

export default function Home() {
  return ( <>
    <title>Linktera Ailem</title>
      <div>
        <Sidebar />
      </div>
    <div>
        <ContentArea />
      </div>

  </> )
}
