import React from 'react'
import './index.css'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import {useState} from 'react'
import FeedbackData from './data/data'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

function App() {
  const [feedback, setFeedback]=useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    } 
  }

  return (
    <>
      <Header />
      <div className="container">
      <FeedbackStats feedback={feedback}/>
        <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
      </div>
      </>
  )
}

export default App
