import React from 'react'

function FoodMoodInsights({ userData, navigate }) {
  // Mock data for demonstration
  const insights = {
    topPositive: [
      { food: '🫐 Blueberries', impact: '+3', confidence: '92%' },
      { food: '🥜 Almonds', impact: '+2.5', confidence: '88%' },
      { food: '🍵 Green Tea', impact: '+2', confidence: '85%' }
    ],
    topNegative: [
      { food: '🍕 Pizza', impact: '-2', confidence: '78%' },
      { food: '🍟 Fries', impact: '-1.5', confidence: '72%' },
      { food: '🥤 Soda', impact: '-1', confidence: '65%' }
    ],
    patterns: [
      {
        title: 'Morning Energy Boost',
        description: 'Coffee + protein breakfast increases energy by 40%',
        icon: '☕',
        color: 'from-amber-400 to-orange-400'
      },
      {
        title: 'Afternoon Crash',
        description: 'Heavy lunch leads to 3 PM energy dip',
        icon: '📉',
        color: 'from-red-400 to-pink-400'
      },
      {
        title: 'Sleep Quality',
        description: 'Late caffeine reduces sleep quality by 25%',
        icon: '😴',
        color: 'from-purple-400 to-indigo-400'
      }
    ]
  }

  const weeklyTrend = [
    { day: 'Mon', mood: 7, energy: 6 },
    { day: 'Tue', mood: 6, energy: 7 },
    { day: 'Wed', mood: 8, energy: 8 },
    { day: 'Thu', mood: 7, energy: 6 },
    { day: 'Fri', mood: 9, energy: 9 },
    { day: 'Sat', mood: 8, energy: 7 },
    { day: 'Sun', mood: 7, energy: 8 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('dashboard')}
            className="text-white/80 hover:text-white mb-2"
          >
            ← Back
          </button>
          <h1 className="text-2xl font-bold">Your Food-Mood Insights</h1>
          <p className="text-purple-100 mt-1">Based on 30 days of tracking</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Key Discovery */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-6 text-white">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">💡</div>
            <div>
              <h2 className="text-xl font-bold mb-2">Key Discovery</h2>
              <p className="text-green-50">
                You feel 35% more energetic when you eat protein-rich breakfasts. 
                Your mood is consistently better on days with regular meal timing.
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Trend Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">This Week's Trend</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 w-16">Mood</span>
              <div className="flex-1 flex items-end space-x-1 h-20">
                {weeklyTrend.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-purple-400 to-purple-500 rounded-t"
                      style={{ height: `${day.mood * 10}%` }}
                    />
                    <span className="text-xs text-gray-500 mt-1">{day.day}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 w-16">Energy</span>
              <div className="flex-1 flex items-end space-x-1 h-20">
                {weeklyTrend.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-amber-400 to-amber-500 rounded-t"
                      style={{ height: `${day.energy * 10}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Food Impact Analysis */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Positive Foods */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">😊</span>
              Mood Boosters
            </h2>
            <div className="space-y-3">
              {insights.topPositive.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.food.split(' ')[0]}</span>
                    <div>
                      <div className="font-medium text-gray-900">{item.food.split(' ')[1]}</div>
                      <div className="text-xs text-gray-500">Confidence: {item.confidence}</div>
                    </div>
                  </div>
                  <div className="text-green-600 font-bold">{item.impact}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Negative Foods */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-2xl mr-2">😔</span>
              Mood Dampeners
            </h2>
            <div className="space-y-3">
              {insights.topNegative.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.food.split(' ')[0]}</span>
                    <div>
                      <div className="font-medium text-gray-900">{item.food.split(' ')[1]}</div>
                      <div className="text-xs text-gray-500">Confidence: {item.confidence}</div>
                    </div>
                  </div>
                  <div className="text-red-600 font-bold">{item.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Discovered Patterns */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Discovered Patterns</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {insights.patterns.map((pattern, index) => (
              <div key={index} className={`bg-gradient-to-r ${pattern.color} rounded-lg p-4 text-white`}>
                <div className="text-3xl mb-2">{pattern.icon}</div>
                <h3 className="font-semibold mb-1">{pattern.title}</h3>
                <p className="text-sm text-white/90">{pattern.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Personalized Recommendations</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-medium text-gray-900">Try intermittent fasting</h3>
                <p className="text-sm text-gray-600">Your energy levels are highest when meals are spaced 4-5 hours apart</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🥗</span>
              <div>
                <h3 className="font-medium text-gray-900">Increase fiber intake</h3>
                <p className="text-sm text-gray-600">Days with higher fiber show 20% better mood stability</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">💧</span>
              <div>
                <h3 className="font-medium text-gray-900">Stay hydrated</h3>
                <p className="text-sm text-gray-600">Your afternoon energy dips correlate with low water intake</p>
              </div>
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Share Your Progress</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="py-2 px-4 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
              <span>📊</span>
              <span className="text-sm font-medium">Export Report</span>
            </button>
            <button className="py-2 px-4 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
              <span>👨‍⚕️</span>
              <span className="text-sm font-medium">Share with Doctor</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodMoodInsights