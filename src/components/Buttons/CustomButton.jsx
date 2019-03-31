import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlayCircle, faTimes, faBan, faRedo, faUndo  } from '@fortawesome/free-solid-svg-icons';

library.add( faPlus );
library.add( faTimes );
library.add( faPlayCircle );
library.add( faBan );
library.add( faRedo );
library.add( faUndo );


const Button = props => {
    let icon;
    switch (props.type) {

        case 'add':
            icon = <span className="f-icon--green" ><FontAwesomeIcon icon="plus"/></span>
        break;

        case 'remove':
            icon = <span className="f-icon--red" ><FontAwesomeIcon icon="times"/></span>
        break;

        case 'redo':
            icon = <span className="f-icon--grey" ><FontAwesomeIcon icon="redo"/></span>
        break;

        case 'undo':
            icon = <span className="f-icon--grey" ><FontAwesomeIcon icon="undo"/></span>
        break;

        case 'play':
            icon = <span className="f-icon--green" > <FontAwesomeIcon icon="play-circle"/></span>
        break;

        case 'clear':
            icon = <span className="f-icon--red" > <FontAwesomeIcon icon="ban"/></span>
        break;


        default:
         
        break;
      }

    return(
        <button className="f-btn" onClick = { props.onClick }> {icon} {props.name} </button>
    )
}

export default Button;