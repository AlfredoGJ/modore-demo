import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col } from 'reactstrap';
import logo from '../assets/img/modore.png'
const NavBar = (props) => {
    const history = useHistory()
    return (
        <Col className = "d-flex flex-row justify-content-between "  >
            <Button className="btn-icon d-none d-sm-block" color ="link" onClick ={e => history.goBack()}>
               <i className="fas fa-arrow-left icon-lg icon-primary"></i>
            </Button>
            <img src = {logo} width ="100px"/>
        
            <Button color ="link">
                <i className= "fas fa-bars icon-lg"></i>
            </Button>            
        </Col>
    );
};

NavBar.propTypes = {};

export default NavBar;