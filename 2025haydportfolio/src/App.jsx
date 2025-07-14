import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import HeroSection from './components/HeroSection/HeroSection'
import BentoGrid from './components/ProjectSection/BentoGrid'
import ProfessionalInvolvements from './components/ProfessionalInvolvements/ProfessionalInvolvements'
import ContactSection from './components/ContactSection/ContactSection'
import { userData } from './data/userData'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
      <div className="min-h-screen bg-cosmic-black text-white overflow-x-hidden">
        <AnimatePresence mode="wait">
          {currentSection === 'home' && (
              <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="min-h-screen"
              >
                <div className="starfield" />
                <HeroSection userData={userData} />
                <BentoGrid userData={userData} />
                <ProfessionalInvolvements userData={userData} />
                <ContactSection />
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  )
}

export default App
