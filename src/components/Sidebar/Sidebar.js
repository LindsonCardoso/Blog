import React from 'react';
import './Sidebar.css';

export const Sidebar = ({ title, description }) => {
 
 return(
 <div className="sidebar">
        <h3 className="sidebar-title">{title}</h3>
        <p className="sidebar-description">{description}</p>
    </div>
)

}