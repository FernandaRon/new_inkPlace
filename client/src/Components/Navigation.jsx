import React from 'react'
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Navigation = () => {
  return  (
    <div>
      <div className="text-left">
      <NavLink to="/"><button type="button" className="btn btn-info">Home</button></NavLink>
      </div>
<<<<<<< HEAD
      <div className="text-right">
=======
      <div className="text-center">
>>>>>>> 6c59c8cc0b9f47187e89b89dfe0290843aeec641
      <NavLink to="/book"><button type="button" className="btn btn-info">Book</button></NavLink>
      </div>
    </div>

  );
};


export default Navigation;
