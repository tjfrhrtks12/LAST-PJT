import { useState, useEffect } from 'react';

export const useDragResize = (isPopupMode, isOpen) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 1200, height: 700 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

  // 팝업 모드일 때 초기 위치 설정 (화면 중앙)
  useEffect(() => {
    if (isPopupMode && isOpen) {
      const centerX = (window.innerWidth - size.width) / 2;
      const centerY = (window.innerHeight - size.height) / 2;
      setPosition({ x: centerX, y: centerY });
    }
  }, [isPopupMode, isOpen, size.width, size.height]);

  // 드래그 시작
  const handleMouseDown = (e) => {
    if (!isPopupMode) return;
    
    if (e.target.closest('.resize-handle')) {
      setIsResizing(true);
      setResizeStart({
        x: e.clientX,
        y: e.clientY,
        width: size.width,
        height: size.height
      });
    } else if (e.target.closest('.chatbot-header')) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  // 드래그/리사이즈 중
  const handleMouseMove = (e) => {
    if (!isPopupMode) return;

    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // 화면 경계 체크
      const maxX = window.innerWidth - size.width;
      const maxY = window.innerHeight - size.height;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    } else if (isResizing) {
      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;
      
      const newWidth = Math.max(400, Math.min(1200, resizeStart.width + deltaX));
      const newHeight = Math.max(300, Math.min(800, resizeStart.height + deltaY));
      
      setSize({ width: newWidth, height: newHeight });
      
      // 리사이즈 중에는 위치를 변경하지 않음 (팝업이 중앙으로 이동하지 않도록)
      // 화면 밖으로 나가지 않도록만 체크
      const maxX = window.innerWidth - newWidth;
      const maxY = window.innerHeight - newHeight;
      
      // 현재 위치가 화면 밖으로 나가는 경우에만 위치 조정
      if (position.x > maxX || position.y > maxY) {
        setPosition(prev => ({
          x: Math.min(prev.x, maxX),
          y: Math.min(prev.y, maxY)
        }));
      }
    }
  };

  // 드래그/리사이즈 종료
  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  // 전역 마우스 이벤트 리스너
  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, resizeStart, size.width, size.height]);

  const getPanelStyle = () => {
    if (!isPopupMode) return {};
    
    // 팝업 모드에서는 항상 인라인 스타일로 위치 제어
    return {
      position: 'fixed',
      top: `${position.y}px`,
      left: `${position.x}px`,
      width: `${size.width}px`,
      height: `${size.height}px`,
      zIndex: 1000,
      cursor: isDragging ? 'grabbing' : 'default',
      transform: 'none', // CSS transform 무시하여 드래그 가능하게 함
      transition: (isDragging || isResizing) ? 'none' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' // 드래그/리사이즈 중에는 애니메이션 비활성화
    };
  };

  return {
    position,
    size,
    isDragging,
    isResizing,
    handleMouseDown,
    getPanelStyle
  };
}; 