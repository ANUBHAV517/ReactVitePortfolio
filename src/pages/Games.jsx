import React from 'react';
import Tabs from '../component/Tabs';
import WithSidebar from '../component/WithSidebar';

function Games({ sidebarOpen, isMobile }) {
  console.log('awdawd', sidebarOpen);
  return (
    <section
      className={`games section  ${
        !isMobile ? (sidebarOpen ? 'open' : '') : ''
      }`}
      id="games"
    >
      <div className="container">
        <Tabs />
      </div>
    </section>
  );
}

export default WithSidebar(Games);
