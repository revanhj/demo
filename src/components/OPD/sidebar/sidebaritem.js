import React from 'react';
import Userprofile from './userprofile';
import Sidebarnavitems from './sidebarnavitems';

const sidebaritem = (props) => {
  return (
    <div className="sidebar">
        <Userprofile />
     <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {props.items.map((item)=><Sidebarnavitems items={item} setBreadcrum={props.setBreadcrum} setcol={props.setcol} seturl={props.seturl} />)
         }
        </ul>
      </nav>
 
    </div>
  );
}

export default sidebaritem;
