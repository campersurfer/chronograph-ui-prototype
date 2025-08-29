import React, { useState } from 'react'
import Onboarding from './screens/Onboarding'
import Dashboard from './screens/Dashboard'
import FoodLogging from './screens/FoodLogging'
import MoodTracking from './screens/MoodTracking'
import FoodMoodInsights from './screens/FoodMoodInsights'

function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding')
  const [userData, setUserData] = useState({
    name: '',
    goals: [],
    sensitivities: [],
    moodEntries: [],
    foodEntries: []
  })

  const screens = {
    onboarding: <Onboarding userData={userData} setUserData={setUserData} onComplete={() => setCurrentScreen('dashboard')} />,
    dashboard: <Dashboard userData={userData} navigate={setCurrentScreen} />,
    foodLogging: <FoodLogging userData={userData} setUserData={setUserData} navigate={setCurrentScreen} />,
    moodTracking: <MoodTracking userData={userData} setUserData={setUserData} navigate={setCurrentScreen} />,
    insights: <FoodMoodInsights userData={userData} navigate={setCurrentScreen} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {screens[currentScreen]}
      
      {/* Debug Navigation - Remove in production */}
      <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-2 space-x-2 opacity-90">
        <span className="text-xs font-semibold text-gray-600">Quick Nav:</span>
        {Object.keys(screens).map(screen => (
          <button
            key={screen}
            onClick={() => setCurrentScreen(screen)}
            className={`text-xs px-2 py-1 rounded ${currentScreen === screen ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {screen}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App