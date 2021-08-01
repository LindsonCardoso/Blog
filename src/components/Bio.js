
import React from 'react';

import {
    bio,
    bioHeader,
    bioName,
    bioMain,
    bioDescription,

  } from '../styles/Components/Bio.module.css'


import imgAvatar from "../../static/images/avatar.png";

export const Bio = ({ title, description, author}) => {

    return(
        <div className={bio}>
            <div className={bioHeader}>
            <img src={imgAvatar} alt={author}/>
        
                <div className={bioName}>
                    <a href={'/'}>{title}</a>
                </div>
            </div>
    
            <div className={bioMain}>
                <p className={bioDescription}>
                    {description}
                </p>
                <div>
                    
                </div>
            </div>
        </div>     
     );
    };


