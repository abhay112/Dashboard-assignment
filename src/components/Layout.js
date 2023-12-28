import React from 'react'
import '../assets/styles/App.scss'

const Layout = ({children}) => {
  return (
    <div className='dashboard-layout'>
        <main className='db-main'>
            <aside className='db-nav-menu'>
                <div className='nav-menu-item'>
                    <h2>Dashboard</h2>
                    <h2>Transaction</h2>
                </div>
            </aside>
            <aside className='db-content'>
                {children}
            </aside>
        </main>
        <footer className='db-footer'>

        </footer>
        
    </div>
  )
}

export default Layout