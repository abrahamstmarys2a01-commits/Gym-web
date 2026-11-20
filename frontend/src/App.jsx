import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import JoinModal from './components/JoinModal';
import ProgramModal from './components/ProgramModal';
import LightboxModal from './components/LightboxModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Central data
import { galleryData } from './data/gymData';

// Document title updater per route
function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'TITAN FORGE | Build Your Body. Transform Your Life.',
      '/about': 'About Us | TITAN FORGE Gym & Fitness',
      '/programs': 'Fitness Programs | TITAN FORGE',
      '/trainers': 'Expert Trainers & Master Coaches | TITAN FORGE',
      '/membership': 'Membership Pricing & Plans | TITAN FORGE',
      '/gallery': 'Photo Gallery & Transformations | TITAN FORGE',
      '/contact': 'Contact & Location | TITAN FORGE'
    };

    document.title = titles[location.pathname] || 'TITAN FORGE | Gym & Fitness';
  }, [location.pathname]);

  return null;
}

export default function App() {
  // Join / Membership Modal state
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [modalDefaultPlan, setModalDefaultPlan] = useState('PREMIUM');

  // Program details modal state
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);

  // Gallery lightbox modal state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenJoin = (planName = 'PREMIUM') => {
    setModalDefaultPlan(planName);
    setIsJoinOpen(true);
  };

  const handleOpenProgram = (program) => {
    setSelectedProgram(program);
    setIsProgramModalOpen(true);
  };

  const handleEnrollFromProgram = (program) => {
    setIsProgramModalOpen(false);
    handleOpenJoin('PREMIUM');
  };

  const handleOpenGalleryImage = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevGalleryImage = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryData.length - 1));
  };

  const handleNextGalleryImage = () => {
    setLightboxIndex((prev) => (prev < galleryData.length - 1 ? prev + 1 : 0));
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#08090a] text-zinc-100 flex flex-col font-sans selection:bg-[#B6FF00] selection:text-black">
        {/* Scroll restoration & Route title manager */}
        <ScrollToTop />
        <TitleUpdater />

        {/* Global Navigation */}
        <Navbar onOpenJoinModal={handleOpenJoin} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onOpenJoinModal={handleOpenJoin}
                  onSelectProgram={handleOpenProgram}
                  onSelectGalleryImage={handleOpenGalleryImage}
                />
              } 
            />
            <Route 
              path="/about" 
              element={<About onOpenJoinModal={handleOpenJoin} />} 
            />
            <Route 
              path="/programs" 
              element={
                <Programs 
                  onOpenJoinModal={handleOpenJoin}
                  onSelectProgram={handleOpenProgram}
                />
              } 
            />
            <Route 
              path="/trainers" 
              element={<Trainers onOpenJoinModal={handleOpenJoin} />} 
            />
            <Route 
              path="/membership" 
              element={<Membership onOpenJoinModal={handleOpenJoin} />} 
            />
            <Route 
              path="/gallery" 
              element={
                <Gallery 
                  onSelectGalleryImage={handleOpenGalleryImage}
                  onOpenJoinModal={handleOpenJoin}
                />
              } 
            />
            <Route 
              path="/contact" 
              element={<Contact />} 
            />
            {/* Fallback route */}
            <Route 
              path="*" 
              element={
                <Home 
                  onOpenJoinModal={handleOpenJoin}
                  onSelectProgram={handleOpenProgram}
                  onSelectGalleryImage={handleOpenGalleryImage}
                />
              } 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenJoinModal={handleOpenJoin} />

        {/* Global Interactive Widgets */}
        <FloatingWhatsApp />
        <BackToTop />

        {/* Universal Join / Membership Modal */}
        <JoinModal
          isOpen={isJoinOpen}
          onClose={() => setIsJoinOpen(false)}
          defaultPlan={modalDefaultPlan}
        />

        {/* Program In-Depth Details Modal */}
        <ProgramModal
          program={selectedProgram}
          isOpen={isProgramModalOpen}
          onClose={() => setIsProgramModalOpen(false)}
          onEnroll={handleEnrollFromProgram}
        />

        {/* Gallery Fullscreen Lightbox Modal */}
        <LightboxModal
          images={galleryData}
          currentIndex={lightboxIndex}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          onPrev={handlePrevGalleryImage}
          onNext={handleNextGalleryImage}
        />
      </div>
    </Router>
  );
}
