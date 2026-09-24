import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const AdminAuthModal: React.FC = () => {
  const { isAdminAuthModalOpen, setIsAdminAuthModalOpen, setIsStudentAuthModalOpen } = useApp();

  useEffect(() => {
    if (isAdminAuthModalOpen) {
      setIsAdminAuthModalOpen(false);
      setIsStudentAuthModalOpen(true);
    }
  }, [isAdminAuthModalOpen, setIsAdminAuthModalOpen, setIsStudentAuthModalOpen]);

  return null;
};
