import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import { NavLink,useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [active, setActive] = useState('');
  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname === '/' || location.pathname === '/dashboard') {
      setActive('dashboard');
    } else if (location.pathname === '/transactions') {
      setActive('transaction');
    } else if(location.pathname === '/contact'){
      setActive('contact');
    }else{
      setActive('')
    }
  }, [location.pathname]);

  return (
    <div className='dashboard-layout'>
      <main className='db-main'>
        <aside className='db-nav-menu'>
          <div className='nav-menu-item'>
            <div className='nav-top'>
              <NavLink  to="/" >
                  <h2 className={active === 'dashboard' ? 'dashboard-active ' : 'dashboard'}>Dashboard</h2>
              </NavLink>
              <NavLink to='/transactions'>
                  <h2 className={active === 'transaction' ? 'transaction-active' : 'transaction'}>Transaction</h2>
              </NavLink>
            </div>
            <div className='nav-bottom'>
            <NavLink to='/contact'>
                  <h2 className={active === 'contact' ? 'contact-active' : 'contact'}>Support</h2>
              </NavLink>
            </div>
           
          </div>
        </aside>
        <aside className='db-content'>{children}</aside>
      </main>
      <footer className='db-footer'></footer>
    </div>
  );
};

export default Layout;
