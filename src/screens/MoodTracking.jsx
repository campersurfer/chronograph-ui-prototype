import React, { useState } from 'react'

function MoodTracking({ userData, setUserData, navigate }) {
  const [moodScore, setMoodScore] = useState(5)
  const [selectedEmotions, setSelectedEmotions] = useState([])
  const [energyLevel, setEnergyLevel] = useState(5)
  const [symptoms, setSymptoms] = useState([])
  const [notes, setNotes] = useState('')

  const moodEmojis = ['😔', '😕', '😐', '🙂', '😊', '😃', '😄', '🤗', '😍', '🤩']
  
  const emotions = [
    { id: 'happy', label: '😊 Happy', color: 'bg-yellow-100 border-yellow-400' },
    { id: 'calm', label: '😌 Calm', color: 'bg-blue-100 border-blue-400' },
    { id: 'energetic', label: '⚡ Energetic', color: 'bg-orange-100 border-orange-400' },
    { id: 'anxious', label: '😰 Anxious', color: 'bg-purple-100 border-purple-400' },
    { id: 'stressed', label: '😣 Stressed', color: 'bg-red-100 border-red-400' },
    { id: 'tired', label: '😴 Tired', color: 'bg-gray-100 border-gray-400' },
    { id: 'focused', label: '🎯 Focused', color: 'bg-green-100 border-green-400' },
    { id: 'irritable', label: '😤 Irritable', color: 'bg-pink-100 border-pink-400' }
  ]

  const physicalSymptoms = [
    '🤕 Headache',
    '💨 Bloating', 
    '🔥 Heartburn',
    '😵 Dizzy',
    '🥱 Fatigue',
    '💔 Racing Heart',
    '🤧 Congestion',
    '🦴 Joint Pain'
  ]

  const toggleEmotion = (emotionId) => {
    setSelectedEmotions(prev =>
      prev.includes(emotionId)
        ? prev.filter(e => e !== emotionId)
        : [...prev, emotionId]
    )
  }

  const toggleSymptom = (symptom) => {
    setSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    )
  }

  const handleSave = () => {
    const moodEntry = {
      score: moodScore,
      emotions: selectedEmotions,
      energy: energyLevel,
      symptoms,
      notes,
      timestamp: new Date().toISOString()
    }
    
    setUserData({
      ...userData,
      moodEntries: [...userData.moodEntries, moodEntry]
    })
    
    navigate('dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('dashboard')}
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back
            </button>
            <h1 className="text-lg font-semibold">Track Mood</h1>
            <button
              onClick={handleSave}
              className="text-primary-600 font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Mood Score */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">How are you feeling?</h2>
          
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{moodEmojis[moodScore - 1]}</div>
            <div className="text-3xl font-bold text-gray-900">{moodScore}/10</div>
          </div>
          
          <input
            type="range"
            min="1"
            max="10"
            value={moodScore}
            onChange={(e) => setMoodScore(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${(moodScore - 1) * 11.11}%, #e5e7eb ${(moodScore - 1) * 11.11}%, #e5e7eb 100%)`
            }}
          />
          
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-500">Very Bad</span>
            <span className="text-xs text-gray-500">Excellent</span>
          </div>
        </div>

        {/* Emotions */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">What emotions are you experiencing?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {emotions.map(emotion => (
              <button
                key={emotion.id}
                onClick={() => toggleEmotion(emotion.id)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedEmotions.includes(emotion.id)
                    ? emotion.color
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-sm font-medium">{emotion.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Energy Level */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Energy Level</h2>
          
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map(level => (
              <button
                key={level}
                onClick={() => setEnergyLevel(level)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${
                  level <= energyLevel
                    ? 'bg-amber-400 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                ⚡
              </button>
            ))}
          </div>
          
          <div className="text-center text-sm text-gray-600">
            {energyLevel === 1 && 'Exhausted'}
            {energyLevel === 2 && 'Low Energy'}
            {energyLevel === 3 && 'Moderate'}
            {energyLevel === 4 && 'Good Energy'}
            {energyLevel === 5 && 'High Energy'}
          </div>
        </div>

        {/* Physical Symptoms */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Any physical symptoms?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {physicalSymptoms.map(symptom => (
              <button
                key={symptom}
                onClick={() => toggleSymptom(symptom)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  symptoms.includes(symptom)
                    ? 'border-red-400 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-sm font-medium">{symptom}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Additional Notes</h2>
          <textarea
            placeholder="Any other observations about how you're feeling..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            rows="3"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
        >
          Save Mood Entry
        </button>
      </div>
    </div>
  )
}

export default MoodTracking