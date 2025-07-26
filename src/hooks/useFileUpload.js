import { useState, useRef } from 'react';
import { validateFile, formatFileSize } from '../utils/chatbotUtils';

export const useFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validation = validateFile(file);
    if (!validation.valid) {
      alert(validation.error);
      return;
    }

    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getFileInfo = () => {
    if (!selectedFile) return null;
    
    return {
      name: selectedFile.name,
      size: formatFileSize(selectedFile.size),
      file: selectedFile
    };
  };

  return {
    selectedFile,
    fileInputRef,
    handleFileSelect,
    removeFile,
    setSelectedFile,
    getFileInfo
  };
}; 