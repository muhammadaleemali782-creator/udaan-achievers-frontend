// Multilingual Engine for Educa Institute Learning Platform
// Supports: English (en), Hinglish (hinglish), Hindi (hi), Marathi (mr)

export type AppLanguage = 'en' | 'hinglish' | 'hi' | 'mr';

export interface TranslationDictionary {
  appName: string;
  appSubtitle: string;
  home: string;
  batches: string;
  vault: string;
  notices: string;
  myLearning: string;
  offlineVault: string;
  doubts: string;
  portalLogin: string;
  hiLearner: string;
  changeGoal: string;
  activeGoal: string;
  recommendedForYou: string;
  freeNotes: string;
  videoClasses: string;
  exploreAllCourses: string;
  downloadOffline: string;
  downloaded: string;
  readNow: string;
  enrollNow: string;
  admissionOpen: string;
  viewDetails: string;
  selectLanguage: string;
  selectClass: string;
  selectSubjects: string;
  selectAvatar: string;
  saveAndContinue: string;
  searchPlaceholder: string;
  noOfflineNotes: string;
  noOfflineNotesSub: string;
  offlineReady: string;
  logout: string;
  adminDesk: string;
  staffPortal: string;
  navHome: string;
  myBatches: string;
  askDoubt: string;
  seeAll: string;
  freeNotesDpp: string;
}

export const translations: Record<AppLanguage, TranslationDictionary> = {
  en: {
    appName: 'Educa Learning App',
    appSubtitle: 'Academic, Tests & Counseling',
    home: 'Home',
    batches: 'Batches',
    vault: 'Study Vault',
    notices: 'Notices',
    myLearning: 'My Learning',
    offlineVault: 'Offline Vault',
    doubts: 'Doubts',
    portalLogin: 'Portal Login',
    hiLearner: 'Hello, Learner!',
    changeGoal: 'Change',
    activeGoal: 'Target Goal',
    recommendedForYou: 'Recommended for Your Class',
    freeNotes: 'Chapter Notes & Study Materials',
    videoClasses: 'Video Lectures & Shorts',
    exploreAllCourses: 'All Batches & Courses',
    downloadOffline: 'Download Offline',
    downloaded: 'Downloaded',
    readNow: 'Read Now',
    enrollNow: 'Enroll Now',
    admissionOpen: 'Admissions Open 2026-27',
    viewDetails: 'View Details',
    selectLanguage: 'Choose App Language',
    selectClass: 'Choose Your Class / Target Exam',
    selectSubjects: 'Select Your Favorite Subjects',
    selectAvatar: 'Pick Your Student Avatar',
    saveAndContinue: 'Save & Enter Learning App',
    searchPlaceholder: 'Search batches, notes, lectures...',
    noOfflineNotes: 'No Offline Notes Saved Yet',
    noOfflineNotesSub: 'Tap "Download Offline" on any chapter note to read without internet.',
    offlineReady: 'Available Without Internet',
    logout: 'Log Out',
    adminDesk: 'Director Admin Desk',
    staffPortal: 'Staff & Faculty Portal',
    navHome: 'Home',
    myBatches: 'My Batches',
    askDoubt: 'Ask Doubt',
    seeAll: 'See All',
    freeNotesDpp: 'Study Notes & PDF Books'
  },
  hinglish: {
    appName: 'Educa Learning App',
    appSubtitle: 'Padhai, Tests aur Counseling',
    home: 'Home',
    batches: 'Batches',
    vault: 'Study Vault',
    notices: 'Notices',
    myLearning: 'Meri Padhai',
    offlineVault: 'Offline Notes',
    doubts: 'Doubts',
    portalLogin: 'Student Login',
    hiLearner: 'Namaste Learner!',
    changeGoal: 'Badlo',
    activeGoal: 'Target Goal',
    recommendedForYou: 'Aapki Class ke Top Batches',
    freeNotes: 'Free Notes & Study Vault',
    videoClasses: 'Video Lectures & Classes',
    exploreAllCourses: 'Sabhi Batches Dekhein',
    downloadOffline: 'Offline Save Karein',
    downloaded: 'Saved',
    readNow: 'Abhi Padhein',
    enrollNow: 'Join Batch',
    admissionOpen: 'Admission Shuru Hai',
    viewDetails: 'Details Dekhein',
    selectLanguage: 'App Language Chunein',
    selectClass: 'Apni Class / Target Exam Chunein',
    selectSubjects: 'Subjects Chunein',
    selectAvatar: 'Avatar Chunein',
    saveAndContinue: 'Save Karke Aage Badhein',
    searchPlaceholder: 'Batches, notes, chapters search karein...',
    noOfflineNotes: 'Koi Offline Note Saved Nahi Hai',
    noOfflineNotesSub: 'Kisi bhi chapter note par "Offline Save" dabayein bina internet padhne ke liye.',
    offlineReady: 'Bina Internet Padhein',
    logout: 'Logout Karein',
    adminDesk: 'Director Admin Desk',
    staffPortal: 'Faculty Portal',
    navHome: 'Home',
    myBatches: 'Batches',
    askDoubt: 'Doubt Puchein',
    seeAll: 'Sab Dekhein',
    freeNotesDpp: 'Notes & Books'
  },
  hi: {
    appName: 'एजुका लर्निंग ऐप',
    appSubtitle: 'शैक्षणिक अध्ययन, टेस्ट एवं परामर्श',
    home: 'होम',
    batches: 'बैचेस',
    vault: 'स्टडी वॉल्ट',
    notices: 'सूचनाएं',
    myLearning: 'मेरी पढ़ाई',
    offlineVault: 'ऑफलाइन नोट्स',
    doubts: 'संदेह निवारण',
    portalLogin: 'विद्यार्थी लॉगिन',
    hiLearner: 'नमस्ते विद्यार्थी!',
    changeGoal: 'बदलें',
    activeGoal: 'लक्षित कक्षा',
    recommendedForYou: 'आपकी कक्षा हेतु चयनित बैचेस',
    freeNotes: 'अध्याय नोट्स एवं अध्ययन सामग्री',
    videoClasses: 'वीडियो कक्षाएं एवं लेक्चर्स',
    exploreAllCourses: 'सभी बैचेस देखें',
    downloadOffline: 'ऑफलाइन सहेजें',
    downloaded: 'सहेजा गया',
    readNow: 'अभी पढ़ें',
    enrollNow: 'प्रवेश लें',
    admissionOpen: 'प्रवेश प्रारंभ 2026-27',
    viewDetails: 'विवरण देखें',
    selectLanguage: 'ऐप की भाषा चुनें',
    selectClass: 'अपनी कक्षा / लक्ष्य परीक्षा चुनें',
    selectSubjects: 'अपने विषय चुनें',
    selectAvatar: 'अवतार चुनें',
    saveAndContinue: 'सहेजें और आगे बढ़ें',
    searchPlaceholder: 'बैच, नोट्स, लेक्चर खोजें...',
    noOfflineNotes: 'कोई ऑफलाइन नोट सुरक्षित नहीं है',
    noOfflineNotesSub: 'बिना इंटरनेट पढ़ने हेतु किसी भी नोट पर "ऑफलाइन सहेजें" दबाएं।',
    offlineReady: 'बिना इंटरनेट उपलब्ध',
    logout: 'लॉगआउट',
    adminDesk: 'निदेशक व्यवस्थापक',
    staffPortal: 'शिक्षक पोर्टल',
    navHome: 'होम',
    myBatches: 'बैचेस',
    askDoubt: 'संदेह पूछें',
    seeAll: 'सभी देखें',
    freeNotesDpp: 'नोट्स एवं पुस्तकें'
  },
  mr: {
    appName: 'एजुका लर्निंग ॲप',
    appSubtitle: 'शिक्षण, चाचण्या आणि मार्गदर्शन',
    home: 'मुख्यपृष्ठ',
    batches: 'बॅचेस',
    vault: 'अभ्यास साहित्य',
    notices: 'सूचना',
    myLearning: 'माझा अभ्यास',
    offlineVault: 'ऑफलाइन नोट्स',
    doubts: 'शंका निरसन',
    portalLogin: 'लॉगिन करा',
    hiLearner: 'नमस्कार!',
    changeGoal: 'बदला',
    activeGoal: 'लक्ष्य',
    recommendedForYou: 'तुमच्या वर्गासाठी शिफारस केलेले',
    freeNotes: 'प्रकरण नोट्स आणि अभ्यास साहित्य',
    videoClasses: 'व्हिडिओ लेक्चर्स',
    exploreAllCourses: 'सर्व बॅचेस पहा',
    downloadOffline: 'ऑफलाइन सेव्ह करा',
    downloaded: 'सेव्ह झाले',
    readNow: 'वाचा',
    enrollNow: 'प्रवेश घ्या',
    admissionOpen: 'प्रवेश सुरू',
    viewDetails: 'तपशील पहा',
    selectLanguage: 'भाषा निवडा',
    selectClass: 'वर्ग निवडा',
    selectSubjects: 'विषय निवडा',
    selectAvatar: 'अवतार निवडा',
    saveAndContinue: 'जतन करा आणि पुढे जा',
    searchPlaceholder: 'बॅचेस, नोट्स शोधा...',
    noOfflineNotes: 'अद्याप कोणत्याही नोट्स सेव्ह केलेल्या नाहीत',
    noOfflineNotesSub: 'इंटरनेटशिवाय वाचण्यासाठी कोणत्याही नोटवर "ऑफलाइन सेव्ह करा" दाबा.',
    offlineReady: 'इंटरनेटशिवाय उपलब्ध',
    logout: 'लॉगआउट',
    adminDesk: 'प्रशासक कक्ष',
    staffPortal: 'शिक्षक कक्ष',
    navHome: 'मुख्यपृष्ठ',
    myBatches: 'माझ्या बॅचेस',
    askDoubt: 'शंका विचारा',
    seeAll: 'सर्व पहा',
    freeNotesDpp: 'नोट्स आणि पुस्तके'
  }
};

export const getTranslation = (lang: AppLanguage = 'en'): TranslationDictionary => {
  return translations[lang] || translations.en;
};
