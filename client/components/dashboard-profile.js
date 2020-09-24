import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const DashboardProfile = () => {
  const { username } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Profile</div>
      <div id="username">{username}</div>
      <div><Link to="/dashboard">Go To Root</Link></div>
      <div><Link to="/dashboard/main">Go To Main</Link></div>
    </div>
  )
}

DashboardProfile.propTypes = {}

export default DashboardProfile
