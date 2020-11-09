import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col } from 'reactstrap';
import logo from '../assets/img/modore.png'
import { useLocation } from 'react-router-dom';
const NavBar = (props) => {
    const history = useHistory()
    const location = useLocation()
    const show = location.pathname !="/"
    console.log( location)
    return (
            show?   <Col className = "d-flex flex-row justify-content-between height-10"  >

            <Button className="btn-icon d-none d-sm-block" color ="link" onClick ={e => history.goBack()}>
               <i className="fas fa-arrow-left icon-lg icon-primary txt-secondary"></i>
            </Button>
            <img src = {logo} width ="100px"/>
        
            <Button color ="link">
                <i className= "fas fa-bars icon-lg txt-secondary"></i>
            </Button>            
        </Col> 
        : 
        <div className ="primary height-10">
        </div>
       
    );
};


export default NavBar;