import React from 'react';
import PropTypes from 'prop-types';
import {UncontrolledTooltip} from 'reactstrap'
import './Help.css'
const Help = () => {
    return (
        <div className =  "floating-button" >
            <div className ="bg-white circle">

            <i className = "fas fa-question-circle txt-secondary icon-md" id = "helpTooltip"></i>
            <UncontrolledTooltip placement = "left" target = "helpTooltip">
                Ayuda
            </UncontrolledTooltip>
            </div>
        </div>
    );
};

Help.propTypes = {};

export default Help;