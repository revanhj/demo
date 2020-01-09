import React from 'react';
import Submenu from './submenu';

const sidebarnavitems = (props) => {
  const handle=
    ()=>{props.setBreadcrum(props.items.name)
      if(typeof(props.items.submenu)==='undefined'){
      props.setcol(props.items.col)
      props.seturl(props.items.url)}
      }

    
    return (
    <li className="nav-item has-treeview">
    
    <span className="nav-link" onClick={handle}>
      <i className={props.items.icon}></i>
      <p className='pl-3'>
        {props.items.name}
        {(props.items.submenu)?
        <i className="right fas fa-angle-down"></i>:''}
      </p>
    </span>
    {(props.items.submenu)?
    <Submenu items={props.items.submenu} setBreadcrum={props.setBreadcrum} name={props.items.name}/>:<></>}
  </li>
  );
}

export default sidebarnavitems;
