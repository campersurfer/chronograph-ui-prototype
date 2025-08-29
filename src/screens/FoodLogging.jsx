import React, { useState } from 'react'

function FoodLogging({ userData, setUserData, navigate }) {
  const [mealType, setMealType] = useState('breakfast')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFoods, setSelectedFoods] = useState([])
  
  const mealTypes = [
    { id: 'breakfast', label: '🌅 Breakfast', time: '7-10 AM' },
    { id: 'lunch', label: '☀️ Lunch', time: '12-2 PM' },
    { id: 'dinner', label: '🌙 Dinner', time: '6-8 PM' },
    { id: 'snack', label: '🍿 Snack', time: 'Anytime' }
  ]

  const quickAddFoods = [
    { name: 'Banana', emoji: '🍌', calories: 105, mood: '+1' },
    { name: 'Apple', emoji: '🍎', calories: 95, mood: '+1' },
    { name: 'Coffee', emoji: '☕', calories: 5, mood: '+2' },
    { name: 'Salad', emoji: '🥗', calories: 150, mood: '+1' },
    { name: 'Chicken Breast', emoji: '🍗', calories: 165, mood: '0' },
    { name: 'Rice Bowl', emoji: '🍚', calories: 200, mood: '0' },
    { name: 'Pizza Slice', emoji: '🍕', calories: 285, mood: '-1' },
    { name: 'Dark Chocolate', emoji: '🍫', calories: 170, mood: '+2' }
  ]

  const recentFoods = [
    { name: 'Oatmeal with Berries', time: 'Yesterday, 8:30 AM', calories: 280 },
    { name: 'Grilled Salmon', time: 'Yesterday, 7:00 PM', calories: 350 },
    { name: 'Greek Yogurt', time: '2 days ago', calories: 130 }
  ]

  const handleQuickAdd = (food) => {
    const newEntry = {
      ...food,
      mealType,
      timestamp: new Date().toISOString()
    }
    setSelectedFoods([...selectedFoods, newEntry])
  }

  const handleLogMeal = () => {
    setUserData({
      ...userData,
      foodEntries: [...userData.foodEntries, ...selectedFoods]
    })
    navigate('dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
            <h1 className="text-lg font-semibold">Log Food</h1>
            <button
              onClick={handleLogMeal}
              disabled={selectedFoods.length === 0}
              className="text-primary-600 font-medium disabled:opacity-50"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Meal Type Selection */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Select Meal Type</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {mealTypes.map(meal => (
              <button
                key={meal.id}
                onClick={() => setMealType(meal.id)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  mealType === meal.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-lg mb-1">{meal.label}</div>
                <div className="text-xs text-gray-500">{meal.time}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for food..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
          </div>
          
          {/* Camera and Barcode Options */}
          <div className="flex space-x-3 mt-3">
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
              <span>📸</span>
              <span className="text-sm font-medium">Photo</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
              <span>📊</span>
              <span className="text-sm font-medium">Barcode</span>
            </button>
          </div>
        </div>

        {/* Quick Add Foods */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Quick Add</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickAddFoods.map((food, index) => (
              <button
                key={index}
                onClick={() => handleQuickAdd(food)}
                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-3xl mb-1">{food.emoji}</span>
                <span className="text-sm font-medium text-gray-900">{food.name}</span>
                <span className="text-xs text-gray-500">{food.calories} cal</span>
                <span className={`text-xs font-medium ${
                  food.mood.startsWith('+') ? 'text-green-600' : 
                  food.mood.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                }`}>
                  Mood {food.mood}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Foods */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Recent</h2>
          <div className="space-y-2">
            {recentFoods.map((food, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="text-left">
                  <div className="font-medium text-gray-900">{food.name}</div>
                  <div className="text-xs text-gray-500">{food.time}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">{food.calories} cal</div>
                  <div className="text-xs text-primary-600">+ Add</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Foods Summary */}
        {selectedFoods.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h3 className="font-medium text-green-900 mb-2">
              Selected ({selectedFoods.length} items)
            </h3>
            <div className="space-y-1">
              {selectedFoods.map((food, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span>{food.emoji} {food.name}</span>
                  <span className="text-green-700">{food.calories} cal</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-green-200">
              <div className="flex justify-between font-medium text-green-900">
                <span>Total Calories</span>
                <span>{selectedFoods.reduce((sum, f) => sum + f.calories, 0)} cal</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FoodLogging