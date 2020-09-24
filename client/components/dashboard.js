import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head />
      <div id="title">Dashboard</div>
      <div><Link to="/dashboard/profile/f2dd97a1-19cc-4273-bffe-1331ba1c22f9">Go To Profile</Link></div>
      <div><Link to="/dashboard/main">Go To Main</Link></div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
