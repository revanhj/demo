import React from 'react';

const submenu = (props) => {
  return (
    <ul className="nav nav-treeview">
    {props.items.map((item)=><li className="nav-item">
        <a href="#" className="nav-link" onClick={()=>{props.setBreadcrum(props.name+" / "+item.name)}}>
          <i className={item.icon + '  ml-3'}></i>
          <p className="pl-3">{item.name}</p>
        </a>
      </li>)  }
    </ul>
  );
}
export default submenu;
