import React from 'react';
import useIsMobile from '../hook/useIsMobile';
import { useSelector } from 'react-redux';

function WithSidebar(WrapperComponent) {
  return function SidebarWrapper(props) {
    const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
    const isMobile = useIsMobile();
    return (
      <WrapperComponent
        {...props}
        sidebarOpen={sidebarOpen}
        isMobile={isMobile}
      />
    );
  };
}

export default WithSidebar;
