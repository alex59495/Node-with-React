// Survey New show SurveyForm and SurveyFormReviews
import React, { useState } from 'react';
import {reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
  const [showFormReview, setShowFormReview] = useState(false)

  const renderContent = () => {
    if(showFormReview) {
      return <SurveyFormReview onCancel={() => setShowFormReview(false)}/>
    }

    return <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />
  }


  return (
    <>
      {renderContent()}
    </>
  )
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
