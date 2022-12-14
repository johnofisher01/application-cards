import React from 'react'
import FeedbackItem from './FeedbackItem'
import Card from './shared/Card'
import PropTypes from 'prop-types'

const FeedbackList = ({feedback}) => {
     if (!feedback || feedback.length == 0) {
         return <p>No Feedback</p>
     }
    return (
        <div className='feedback-list'>
            {feedback.map((item ) => (
                <FeedbackItem key ={item.id} item={item}/>
                
            ))}
      
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}



export default FeedbackList
