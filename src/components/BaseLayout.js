import React, { Components } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'muicss/lib/react/button';

function BaseLayout ({children}){
    return (
        <div className="mainPage">
            <div className="navigation">
                <Button variant="flat" ><NavLink className="navItem" to="/">Home</NavLink ></Button>
                <Button variant="flat"><NavLink className="navItem" to="/users">Users</NavLink></Button>
                <Button variant="flat"><NavLink className="navItem" to="/users">Nav</NavLink></Button>
            </div>
            {children}
        </div>
    );
  }


export default BaseLayout;
