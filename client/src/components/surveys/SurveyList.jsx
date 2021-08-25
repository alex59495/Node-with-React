import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { fetchSurveys } from '../../actions';

const SurveyList = ({fetchSurveys, surveys}) => {
  useEffect(() => {
    fetchSurveys()
  })

  const renderSurveys = () => {
    return surveys.map(survey => {
      return(
        <div className="card darken-1" key={survey._id}>
          <div className="card-title">
            {survey.title}
          </div>
          <p>
            {survey.body}
          </p>
          <p className="right">
            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
          <div className="card-action">
            <a>Yes {survey.yes}</a>
            <a>No {survey.no}</a>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {renderSurveys()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys
  }

}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
