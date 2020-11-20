import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Collapse, Nav, NavItem, NavLink, Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import logo from '../assets/img/modore.png'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
const NavBar = (props) => {
    const history = useHistory()
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const show = location.pathname !="/"
    console.log( location)
    return (
            show?   <Col className = "d-flex flex-row justify-content-between height-10"  >

            <Button className="btn-icon d-none d-sm-block" color ="link" onClick ={e => history.goBack()}>
               <i className="fas fa-arrow-left icon-lg icon-primary txt-secondary"></i>
            </Button>
            <img src = {logo} width ="100px"/>
        
            <Button color ="link" onClick ={e => setOpen(!open)} id ="menu-btn">
                <i className= "fas fa-bars icon-lg txt-secondary"></i>
            </Button>
            <Popover isOpen ={open} target ="menu-btn" placement ="bottom">
                <PopoverHeader>
                    Menu
                </PopoverHeader>
                <PopoverBody>
                    <a href ="/">Ir al Inicio</a>
                </PopoverBody>     
            </Popover>
        </Col> 
        : 
        <div className ="primary height-10">
        </div>
       
    );
};


export default NavBar;