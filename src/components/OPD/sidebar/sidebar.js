import React from 'react';
import Sidebarbrand from './sidebarbrand';
import Sidebaritem from './sidebaritem';

const sidebar = (prop) => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Sidebarbrand />
        
        <Sidebaritem items={prop.items} setBreadcrum={prop.setBreadcrum} setcol={prop.setcol} seturl={prop.seturl}/>
        </aside>
  );
}

export default sidebar;
