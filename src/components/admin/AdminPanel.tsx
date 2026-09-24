import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AdminLayout, AdminTab } from './AdminLayout';
import { DashboardOverview } from './DashboardOverview';
import { StudentManagement } from './erp/StudentManagement';
import { AdmissionManagement } from './erp/AdmissionManagement';
import { CourseBatchManagement } from './erp/CourseBatchManagement';
import { FeesManagement } from './erp/FeesManagement';
import { AttendanceManagement } from './erp/AttendanceManagement';

// CMS Managers
import { CourseManager } from './CourseManager';
import { BooksPdfManager } from './BooksPdfManager';
import { YouTubeManager } from './YouTubeManager';
import { GalleryManager } from './GalleryManager';
import { SyllabusManager } from './SyllabusManager';
import { NoticeManager } from './NoticeManager';
import { InquiriesManager } from './InquiriesManager';
import { AdsManager } from './AdsManager';
import { ReviewsManager } from './ReviewsManager';
import { SocialMediaManager } from './SocialMediaManager';
import { WebsiteSettings } from './WebsiteSettings';
import { MobilePreview } from './MobilePreview';

export const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {/* 6 Core ERP Tabs */}
      {activeTab === 'overview' && <DashboardOverview onSelectTab={setActiveTab} />}
      {activeTab === 'students' && <StudentManagement />}
      {activeTab === 'admissions' && <AdmissionManagement />}
      {activeTab === 'batches' && <CourseBatchManagement />}
      {activeTab === 'fees' && <FeesManagement />}
      {activeTab === 'attendance' && <AttendanceManagement />}

      {/* Website CMS Tabs */}
      {activeTab === 'settings' && <WebsiteSettings />}
      {activeTab === 'notices' && <NoticeManager />}
      {activeTab === 'inquiries' && <InquiriesManager />}
      {activeTab === 'courses' && <CourseManager />}
      {activeTab === 'pdfs' && <BooksPdfManager />}
      {activeTab === 'videos' && <YouTubeManager />}
      {activeTab === 'gallery' && <GalleryManager />}
      {activeTab === 'syllabus' && <SyllabusManager />}
      {activeTab === 'ads' && <AdsManager />}
      {activeTab === 'reviews' && <ReviewsManager />}
      {activeTab === 'socials' && <SocialMediaManager />}
      {activeTab === 'preview' && <MobilePreview />}
    </AdminLayout>
  );
};
