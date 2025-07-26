import React from 'react';

const SIDEBAR_COLLAPSED_WIDTH = 48;
const SIDEBAR_EXPANDED_WIDTH = 160;

const MENU_LIST = [
  { label: '1학년', short: '1' },
  { label: '2학년', short: '2' },
  { label: '3학년', short: '3' },
  { label: '일정표', short: '📅', icon: '📅' },
  { label: '관리', short: '⚙️', icon: '⚙️' },
];

export const Sidebar = ({ 
  sidebarHovered, 
  activeMenu, 
  onMenuClick, 
  onLogout, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  return (
    <div
      className="sidebar"
      style={{
        width: sidebarHovered ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
        minWidth: sidebarHovered ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
        maxWidth: sidebarHovered ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="sidebar-header">
        <div className="sidebar-logo"></div>
      </div>
      <ul className="sidebar-menu">
        {MENU_LIST.map((item) => (
          <li
            className={`menu-item${activeMenu === item.label ? ' active' : ''}`}
            key={item.label}
            onClick={() => onMenuClick(item.label)}
          >
            {sidebarHovered ? (
              <>
                {item.icon && <span className="menu-icon">{item.icon}</span>}
                {item.label}
              </>
            ) : (
              item.short
            )}
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <button onClick={onLogout} className="logout-button">
          {sidebarHovered ? '로그아웃' : '⎋'}
        </button>
      </div>
    </div>
  );
}; 