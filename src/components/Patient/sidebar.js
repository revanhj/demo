import React from 'react';
import Myprofilecard from './pfimg';
const sideitems=[
  
  {
    icon:'fa fa-calendar',
    name:'My Appointment',
    submenu:[
       {
    icon:'fa fa-stethoscope',
    name:'OPD'
  }, {
    icon:'fa fa-stethoscope',
    name:'OPD'
  }
    ]
  },
   {
    icon:'fa fa-stethoscope',
    name:'OPD'
  },
   {
    icon:'fa fa-bed',
    name:'IPD'
  },
   {
    icon:'fa fa-medkit',
    name:'Pharmacy'
  },
   {
    icon:'fa fa-flask',
    name:'Pathology'
  },
   {
    icon:'fas fa-microscope',
    name:'Radiology'
  },
   {
    icon:'fa fa-cut',
    name:'Operation Theatre'
  },
  
   {
    icon:'fa fa-ambulance',
    name:'Ambulance'
  },
  
   {
    icon:'fa fa-tint',
    name:'Blood bank'
  }

];

export default (prop) =>
<React.Fragment>


<div className=' navbar-expand-sm d-flex flex-row bg-primary align-items-streach' style={{minHeight:'100vh !important'}}>
               <div class="collapse navbar-collapse" id="navbarNav">
               <div>
               <Myprofilecard hide={prop.hide} />
               <div className='accordion' id="accordionExample">
               {sideitems.map((item,index)=>
               <React.Fragment>
                            <a key={index} href={'#'+item.name.replace(' ','')} data-toggle='collapse' className={'d-block p-2 px-3 border-top border-right list-group-item-action bg-primary text-white'} ><i className={'mr-1'+' '+item.icon} ></i><span  style={{display:(!prop.hide)?'inline-block':'none'}}>{item.name}</span>
                            </a>
                           
                           {(item.submenu)? <div data-parent="#accordionExample" className='collapse' id={item.name.replace(' ','')}>{item.submenu.map((submenu,index)=><a key={index}  href={'#'+submenu.name.replace(' ','')} data-toggle='collapse' className={'d-block p-2 px-3 border-top border-right list-group-item-action bg-dark text-white collapse '+item.name} ><i className={'mr-1'+' '+item.icon} ></i><span  style={{display:(!prop.hide)?'inline-block':'none'}} >{item.name}</span>
                            </a>)}
                            {(item.submenu.submenu)? <div data-parent="#accordionExample" className='collapse' id={item.submenu.name.replace(' ','')}>{item.submenu.submenu.map((submenu,index)=><a key={index} className={'d-block p-2 px-3 border-top border-right list-group-item-action bg-dark text-white collapse '+item.name} ><i className={'mr-1'+' '+item.icon} ></i><span  style={{display:(!prop.hide)?'inline-block':'none'}} >{item.name}</span>
                            </a>)}</div>:''}
                            
                            </div>:''}
                            

                   </React.Fragment>         
                            
                            )
                            
                            
                            
                            
                            
                            }               
                    </div >  
                    </div>  
                    </div>
    </div>                                       
</React.Fragment>