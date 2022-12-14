import React from 'react'
import './index.css'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import {useState} from 'react'
import FeedbackData from './data/data'
import FeedbackList from './components/FeedbackList'

function App() {
  const [feedback, setFeedback]=useState(FeedbackData)



  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback}/>
      </div>
      </>
  )
}

export default App
