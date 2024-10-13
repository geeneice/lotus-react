import React from 'react'
import HeaderDB from '../../components/HeaderDB'
import DashboardSectionOne from '../../components/DashboardSectionOne'
const Dashboard = () => {
  return (
    <div>
      <HeaderDB text={"Henry Chad"} navName={"Dashboard"}/>
      <DashboardSectionOne/>
    </div>
  )
}

export default Dashboard