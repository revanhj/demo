import React from 'react';

const userprofile = () => {
  return (
    
    <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="#" className="d-block">Alexander Pierce</a>
          <a href="#" className="d-block">RECP007</a>

        </div>
      </div>

  );
}

export default userprofile;
