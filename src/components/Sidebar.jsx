import React from 'react'
import logo from '../assets/enricher logo 1.png'
import { Link, Outlet } from 'react-router-dom';
import dashboardLogo from "../assets/dashboard.png"
import accountLogo from "../assets/accounts.png"
import manageKyc from "../assets/manage kyc.png"
import savings from "../assets/savings.png"
import wr from "../assets/Withdrawal requests.png"
import history from "../assets/History.png"
import userA from "../assets/User Activity.png"
import reportsS from "../assets/reports-section.png"
import fs from "../assets/fees and Charges.png"
import investment from "../assets/investments.png"
import notifications from "../assets/notifications.png"
import cst from "../assets/customer support tickets.png"
import securitysettings from "../assets/security settings.png"
import signOut from "../assets/sign out.png"

const groupedNavItems = [
    {
        heading: "",  
        items: [{ navName: "Dashboard", goTo: "/dashboard", logo: dashboardLogo }]
    },
    {
        heading: "Users", 
        items: [
            { navName: "Accounts", goTo: "/account", logo: accountLogo },
            { navName: "Manage KYC", goTo: "", logo: manageKyc }
        ]
    },
    {
        heading: "SAVINGS & INVESTMENTS",  
        items: [
            { navName: "Savings", goTo: "", logo: savings },
            { navName: "Investment", goTo: "", logo: investment }
        ]
    },
    {
        heading: "TRANSACTIONS",  
        items: [
            { navName: "Withdrawal Requests", goTo: "", logo: wr },
            { navName: "History", goTo: "", logo: history }
        ]
    },
    {
        heading: "REPORTS", 
        items: [
            { navName: "User Activity", goTo: "", logo: userA },
            { navName: "Reports Section", goTo: "", logo: reportsS }
        ]
    },
    {
        heading: "CONFIGURE",  
        items: [{ navName: "Fees and Charges", goTo: "", logo: fs },
          { navName: "Notifications", goTo: "", logo: notifications },
          { navName: "Customer Support Tickets", goTo: "", logo: cst },
          { navName: "Security Settings", goTo: "", logo: securitysettings }

        ]
        
    },

    {
      heading: "",  
      items: [{ navName: "Sign Out", goTo: "", logo: signOut }]
      
  }
]

const Sidebar = () => {
  return (

    <div className="flex">

    
    <div className='w-[25%] h-[100vh] pt-[48px] pl-[24px] overflow-auto scrollbar-none'>
       
        <div className="flex gap-2 place-items-center">
            <img src={logo} alt="Enricher logo" />
            <h1 className='text-custompurple text-[36px] font-medium'>Enricher</h1>
        </div>
        
        <div className='pt-8 pl-4'>
          <ul>
            {groupedNavItems.map((group, groupIndex) => (
              <li key={groupIndex} className='mb-6 text-customGray text-[16px]'>
                
                {group.heading && (
                  <h2 className='text-customGray font-semibold text-lg mb-2'>
                    {group.heading}
                  </h2>
                )}

                
                {group.items.map((item, index) => (
                  <div key={index} className="flex gap-6 place-items-center mb-2">
                    <img src={item.logo} alt={`${item.navName} logo`} />
                    <Link to={item.goTo}>
                      {item.navName}
                    </Link>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
    </div>

    <div className=' h-[100vh] overflow-auto scrollbar-none w-[75%] flex justify-center place-items-center pr-8'>
      <div className="bg-customBg h-[95vh] w-[100%] rounded-lg overflow-auto scrollbar-none px-4 pt-4">
      <Outlet/>
      </div>
    </div>

    </div>
  )
}

export default Sidebar;