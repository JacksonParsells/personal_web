import React from 'react';

import SidebarData from '../../shared/data/SidebarData';

import './Sidebar.scss';

const Sidebar: React.FunctionComponent = () => {
    return (
        <div className="sidebar">
            {SidebarData.map((item, index) => {
                return (
                    <div key={index} className="sidebar-item">
                        {item.title.includes('Blog') ? (
                            <a href={item.path} target="_blank" rel="noopener noreferrer">
                                {item.icon}
                                <span>{item.title}</span>
                            </a>
                        ) : (
                            <a href={item.path}>
                                {item.icon}
                                <span> {item.title}</span>
                            </a>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;