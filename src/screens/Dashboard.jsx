import React from 'react'

function Dashboard({ userData, navigate }) {
  const stats = {
    mood: userData.moodEntries.length > 0 
      ? userData.moodEntries[userData.moodEntries.length - 1].score 
      : 7,
    energy: 8,
    nutrition: 85,
    streak: 5
  }

  const quickActions = [
    { icon: '🍽️', label: 'Log Food', action: 'foodLogging', color: 'bg-green-500' },
    { icon: '😊', label: 'Track Mood', action: 'moodTracking', color: 'bg-amber-500' },
    { icon: '📊', label: 'View Insights', action: 'insights', color: 'bg-purple-500' },
    { icon: '💧', label: 'Log Water', action: 'water', color: 'bg-blue-500' }
  ]

  const recentCorrelations = [
    { food: '☕ Coffee', mood: '+2', time: '2 hours ago', trend: 'up' },
    { food: '🥗 Salad', mood: '+1', time: '4 hours ago', trend: 'up' },
    { food: '🍕 Pizza', mood: '-1', time: 'Yesterday', trend: 'down' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">
            Good morning, {userData.name || 'there'}! ☀️
          </h1>
          <p className="text-primary-100">
            Day {stats.streak} of your wellness journey
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Mood</span>
              <span className="text-2xl">😊</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.mood}/10</div>
            <div className="text-xs text-green-600">↑ 15% this week</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Energy</span>
              <span className="text-2xl">⚡</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.energy}/10</div>
            <div className="text-xs text-green-600">↑ 8% today</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Nutrition</span>
              <span className="text-2xl">🥗</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.nutrition}%</div>
            <div className="text-xs text-gray-600">On target</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Streak</span>
              <span className="text-2xl">🔥</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.streak} days</div>
            <div className="text-xs text-amber-600">Keep going!</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-4 gap-4">
            {quickActions.map(action => (
              <button
                key={action.label}
                onClick={() => navigate(action.action)}
                className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`${action.color} text-white text-3xl w-16 h-16 rounded-full flex items-center justify-center`}>
                  {action.icon}
                </div>
                <span className="text-xs text-gray-700 font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Food-Mood Correlations */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Correlations</h2>
          <div className="space-y-3">
            {recentCorrelations.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{item.food.split(' ')[0]}</span>
                  <div>
                    <div className="font-medium text-gray-900">{item.food.split(' ')[1]}</div>
                    <div className="text-xs text-gray-500">{item.time}</div>
                  </div>
                </div>
                <div className={`flex items-center space-x-1 ${
                  item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span className="font-semibold">{item.mood}</span>
                  <span>{item.trend === 'up' ? '↑' : '↓'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Recommendation */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Today's Insight</h3>
          <p className="text-purple-100 mb-3">
            Your energy levels peak around 2 PM. Try having your biggest meal at lunch for optimal energy throughout the day.
          </p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard