import React from 'react';

import SidebarData from '../../shared/data/SidebarData';

import './Sidebar.scss';

const Sidebar: React.FunctionComponent = () => {
    return (
        <div className="sidebar">
            {SidebarData.map((item, index) => {
                return (
                    <div key={index} className="sidebar-item">
                        <a href={item.path}>
                            {item.icon}
                            <span> {item.title}</span>
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;