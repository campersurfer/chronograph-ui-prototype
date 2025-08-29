import React, { useState } from 'react'

function Onboarding({ userData, setUserData, onComplete }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    goals: [],
    sensitivities: []
  })

  const healthGoals = [
    { id: 'weight', label: '🎯 Manage Weight', value: 'weight_management' },
    { id: 'energy', label: '⚡ Boost Energy', value: 'energy_boost' },
    { id: 'mood', label: '😊 Improve Mood', value: 'mood_improvement' },
    { id: 'sleep', label: '😴 Better Sleep', value: 'sleep_quality' },
    { id: 'nutrition', label: '🥗 Optimize Nutrition', value: 'nutrition_optimization' },
    { id: 'sensitivity', label: '🔍 Identify Food Sensitivities', value: 'food_sensitivity' }
  ]

  const commonSensitivities = [
    '🥛 Dairy', '🌾 Gluten', '🥜 Nuts', '🦐 Shellfish', 
    '🥚 Eggs', '🌱 Soy', '☕ Caffeine', '🍬 Sugar'
  ]

  const handleGoalToggle = (goal) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
  }

  const handleSensitivityToggle = (item) => {
    setFormData(prev => ({
      ...prev,
      sensitivities: prev.sensitivities.includes(item)
        ? prev.sensitivities.filter(s => s !== item)
        : [...prev.sensitivities, item]
    }))
  }

  const handleComplete = () => {
    setUserData({ ...userData, ...formData })
    onComplete()
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className={`h-2 w-16 rounded-full transition-colors ${
                  i <= step ? 'bg-primary-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Welcome */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome to Chronograph
              </h1>
              <p className="text-gray-600">
                Your personal health optimization companion
              </p>
            </div>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="What's your name?"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!formData.name}
              className="w-full py-3 px-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Goals */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Hi {formData.name}! 👋
              </h2>
              <p className="text-gray-600">
                What are your health goals?
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {healthGoals.map(goal => (
                <button
                  key={goal.id}
                  onClick={() => handleGoalToggle(goal.value)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    formData.goals.includes(goal.value)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-sm font-medium">{goal.label}</div>
                </button>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={formData.goals.length === 0}
                className="flex-1 py-3 px-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Food Sensitivities */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Any food sensitivities?
              </h2>
              <p className="text-gray-600 text-sm">
                Select any foods you're sensitive to or skip if none
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {commonSensitivities.map(item => (
                <button
                  key={item}
                  onClick={() => handleSensitivityToggle(item)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    formData.sensitivities.includes(item)
                      ? 'border-red-400 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-sm font-medium">{item}</div>
                </button>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleComplete}
                className="flex-1 py-3 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                Start Tracking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Onboarding