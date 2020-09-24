import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const DashboardMain = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <div><Link to="/dashboard/profile/f2dd97a1-19cc-4273-bffe-1331ba1c22f9">Go To Profile</Link></div>
      <div><Link to="/dashboard">Go To Root</Link></div>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
