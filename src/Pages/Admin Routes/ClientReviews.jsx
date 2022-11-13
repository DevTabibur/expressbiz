import React from 'react'
import useReview from '../../Hooks/useReview'

const ClientReviews = () => {
  const [reviews] = useReview();
  console.log('first, re', reviews)
  return (
    <div>ClientReviews</div>
  )
}

export default ClientReviews