import React from 'react';
import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/Navbar'
import {Patient, Receptionist} from './Data'
import PageContent from './PageContent/PageContent';

export default (prop) =>{
    const [breadcrum,setBreadcrum]=React.useState('Receptionist');
    const [url,seturl]=React.useState('');
    const [col,setcol]=React.useState([]);
    return(
        
        <div className="wrapper">
            
<Navbar />

<Sidebar items={Receptionist} setBreadcrum={setBreadcrum} seturl={seturl} setcol={setcol}/>
<PageContent breadcrum={breadcrum} url={url} col={col}/>
</div>
    )
}
