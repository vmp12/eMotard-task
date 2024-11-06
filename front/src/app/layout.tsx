import './globals.css';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {/* <nav className="navbar"> */}
            {/* <ul className="nav-links"> */}
               <a href="/"></a>  
               <a href="/contactus"></a>  
               <a href="/signup"></a>  
               <a href="/dashboard"></a>  
               <a href="/transactions"></a>  
               <a href="/schedule"></a>  
               <a href="/users"></a>  
               <a href="/settings"></a>  
               <a href="/addprofile"></a>  
               <a href="/contactus"></a>  
              <a href="/help"></a>
              {/*  <a href="/sidebar"></a>Sidebar   */}
            {/* </ul> */}
          {/* </nav> */}
          <main className="content">
            {children} {/* This renders the current page content */}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
