import React from 'react';

const SIDEBAR_COLLAPSED_WIDTH = 48;
const SIDEBAR_EXPANDED_WIDTH = 110;

const FIRST_GRADE_MENU = [
  {
    label: '1-1',
    subItems: [
      { label: '학생관리', id: '1-1-학생관리' },
      { label: '시간표', id: '1-1-시간표' }
    ]
  },
  {
    label: '1-2',
    subItems: [
      { label: '학생관리', id: '1-2-학생관리' },
      { label: '시간표', id: '1-2-시간표' }
    ]
  },
  {
    label: '1-3',
    subItems: [
      { label: '학생관리', id: '1-3-학생관리' },
      { label: '시간표', id: '1-3-시간표' }
    ]
  },
  { label: '공지', id: '1-공지' }
];

export const SubSidebar = ({ 
  showFirstGradeSidebar, 
  sidebarHovered, 
  openFirst, 
  onFirstToggle, 
  onSubMenuClick
}) => {
  if (!showFirstGradeSidebar) return null;

  // 서브사이드바는 메인 사이드바 축소 상태의 옆에 고정
  const sidebarLeft = SIDEBAR_COLLAPSED_WIDTH;

  return (
    <div
      className="sub-sidebar"
      style={{
        width: SIDEBAR_EXPANDED_WIDTH,
        left: sidebarLeft
      }}
    >
      <ul className="submenu-list">
        {FIRST_GRADE_MENU.map((item) => (
          <li key={item.label} className="submenu-item">
            {item.subItems ? (
              <div>
                <div
                  className="submenu-header"
                  onClick={() => onFirstToggle(item.label)}
                >
                  <span className="submenu-label">{item.label}</span>
                </div>
                {openFirst[item.label] && (
                  <ul className="submenu-sublist">
                    {item.subItems.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="submenu-subitem"
                        onClick={() => onSubMenuClick(subItem.id)}
                      >
                        <span className="submenu-sublabel">{subItem.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div
                className="submenu-item-single"
                onClick={() => onSubMenuClick(item.id)}
              >
                <span className="submenu-label">{item.label}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}; 