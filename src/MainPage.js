import React, { useState } from 'react';
import './MainPage.css';
import { Sidebar } from './components/Sidebar';
import { SubSidebar } from './components/SubSidebar';
import { MainContent } from './components/MainContent';
import { AIChatbotPanel } from './components/AIChatbotPanel';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';

const MainPage = ({ onLogout }) => {
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState('대시보드');
  const [showFirstGradeSidebar, setShowFirstGradeSidebar] = useState(false);
  const [openFirst, setOpenFirst] = useState({ '1-1': false, '1-2': false, '1-3': false });
  const [hoverCount, setHoverCount] = useState(0);
  const [showAIChatbot, setShowAIChatbot] = useState(false);
  const [isPopupMode, setIsPopupMode] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);

  const handleMenuClick = (label) => {
    setActiveMenu(label);
    setShowFirstGradeSidebar(label === '1학년');
    // 1학년이 아닌 다른 메뉴 선택 시 서브메뉴 초기화
    if (label !== '1학년') {
      setSelectedSubMenu(null);
    }
  };

  const handleFirstToggle = (label) => {
    setOpenFirst((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleSubMenuClick = (subMenuId) => {
    setSelectedSubMenu(subMenuId);
    console.log('Selected sub menu:', subMenuId); // 디버깅용
  };

  const handleSidebarEnter = () => setHoverCount((c) => c + 1);
  const handleSidebarLeave = () => setHoverCount((c) => Math.max(0, c - 1));

  const handleLogoClick = () => {
    setActiveMenu('대시보드');
    setShowFirstGradeSidebar(false);
    setSelectedSubMenu(null);
  };

  const handleAIChatbotToggle = () => {
    setShowAIChatbot((prev) => !prev);
  };

  const handleAIChatbotClose = () => {
    setShowAIChatbot(false);
  };

  const handleModeToggle = () => {
    setIsPopupMode((prev) => !prev);
  };

  React.useEffect(() => {
    setSidebarHovered(hoverCount > 0);
  }, [hoverCount]);

  const renderContent = () => {
    if (activeMenu === '대시보드') {
      return <Dashboard onLogout={onLogout} />;
    } else {
      return (
        <MainContent
          activeMenu={activeMenu}
          selectedSubMenu={selectedSubMenu}
          onAIChatbotToggle={handleAIChatbotToggle}
        />
      );
    }
  };

  return (
    <div className="main-page-container">
      <Navigation onLogoClick={handleLogoClick} onAIChatbotToggle={handleAIChatbotToggle} />
      
      <Sidebar
        sidebarHovered={sidebarHovered}
        activeMenu={activeMenu}
        onMenuClick={handleMenuClick}
        onLogout={onLogout}
        onMouseEnter={handleSidebarEnter}
        onMouseLeave={handleSidebarLeave}
      />

      {showFirstGradeSidebar && (
        <SubSidebar
          showFirstGradeSidebar={showFirstGradeSidebar}
          sidebarHovered={sidebarHovered}
          openFirst={openFirst}
          onFirstToggle={handleFirstToggle}
          onSubMenuClick={handleSubMenuClick}
        />
      )}

      {renderContent()}

      <AIChatbotPanel 
        isOpen={showAIChatbot} 
        onClose={handleAIChatbotClose}
        onModeToggle={handleModeToggle}
        isPopupMode={isPopupMode}
      />
    </div>
  );
};

export default MainPage;
