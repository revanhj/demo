import { patient } from "../Patient/Data";

export const Receptionist=[
    {
      icon:'fa fa-user',
      name:'Receptionist',
      url:'opdDetails',
      col:['Patient Name','Appointment No','Date','Phone','Gender','Doctor','Source','Status'],
      submenu:[
         {
         icon:'fa fa-plus',
         name:'Add Appointment'
         }, 
         {
         icon:'fa fa-phone',
         name:'Call Log'
         },
         {
         icon:'fa fa-clipboard',
         name:'Postal'
         }, 
         {
         icon:'fa fa-building',
         name:'Complain'
         }]
     },
     {
      icon:'fa fa-stethoscope',
      name:'OPD',
      url:'opdDetails',
      col:['Name','Patient Id','Gaurdian Name','Gender','Phone','Consultant','Last Visit','Total Visit']

    },
     {
      icon:'fa fa-bed',
      name:'IPD',
      url:'ipdDetails',
      col:['Name','Patient Id','Gender','Phone','Consultant','Bed','Charges','Payment','Due Payment','Credit Limit']
    },
     {
      icon:'fa fa-medkit',
      name:'Pharmacy',
      url:'opdDetails',
      col:['Bill No','Date','Patient Name','Patient Type','Doctor Name','Total','Action']

    },
     {
      icon:'fa fa-flask',
      name:'Pathology',
      url:'opdDetails',
      col:['Test Name','Short Name','Test Type','Category','Sub Category','Method','Report Days','Charge']
    },
     {
      icon:'fas fa-microscope',
      name:'Radiology',
      url:'opdDetails',
      col:['Test Name','Short Name','Test Type','Category','Sub Category','Report Days','Charge']
    },
     {
      icon:'fa fa-cut',
      name:'Operation Theatre',
      url:'opdDetails',
      col:['Bill No','Patient Name','Patient Id','Gender','Phone','Operation Name','Operation Type','Consaltant','Operation Date','Applied Charge']
    },
    
     {
      icon:'fa fa-ambulance',
      name:'Ambulance',
      url:'opdDetails',
      col:['Vehicle No','Vehicle Model','Year Mode','Driver Name','Driver License','Driver Contact','Vehicle Type']
     },
    
     {
      icon:'fa fa-tint',
      name:'Blood bank',
      url:'opdDetails',
      col:['Blood Group','Status(in bags)','Action']
    }
  
  ];
  export const Patient=[
    {
      icon:'fa fa-user-o',
      name:'My Appointment',
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
  export const OPD=[
    {
      icon:'fa fa-user',
      name:'Receptionist',
          },
     {
      icon:'fa fa-stethoscope',
      name:'OPD',
      submenu:[
        {
        icon:"fa fa-share-square",
        name:'Visits'
        },
        {
        icon:'fa fa-user-md',
        name:'Diagnosis'
        },
        {
        icon:'fa fa-calendar',
        name:'Timeline'
        }]
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
  export const IPD=[
    {
      icon:'fa fa-user',
      name:'Receptionist',
          },
     {
      icon:'fa fa-stethoscope',
      name:'OPD',
      
      
    },
     {
      icon:'fa fa-bed',
      name:'IPD',
      submenu:[
        {
     icon:"fa fa-book",
     name:'Consultant Register'
   }, {
     icon:'fa fa-user-md',
     name:'Diagnosis'
   },
   {
     icon:'fa fa-calendar',
     name:'Timeline'
   },
   {
    icon:'fa fa-id-card',
    name:'Prescription'
  },
  {
    icon:'fa fa-credit-card',
    name:'Charges'
  },
  {
    icon:'fa fa-credit-card',
    name:'Payment'
  },
  {
    icon:'fa fa-file',
    name:'Bill'
  },
     ]
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
      name:'Ambulance',
      url:'opdDetails',
      col:['name','patientId']
    },
    
     {
      icon:'fa fa-tint',
      name:'Blood bank'
    }
  
  ];

  
    