import React, {Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import styles from './Dashboard.module.css';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import { Link } from 'react-router-dom';

class Dashboard extends Component{
    state = {
        un_answered_questions: true,
    }

    unanswered = (event) => {
        this.setState({ un_answered_questions: true })
    }

    answered = (event) => {
        this.setState({ un_answered_questions: false })
    }

    render(){
        return ( 
            <div className={styles.parent}>
                <div className={styles.btnArea}>
                    <button className={styles.btn} onClick={this.unanswered}>UNANSWERED QUESTIONS</button>
                    <button className={styles.btn} onClick={this.answered}>ANSWERED QUESTIONS</button>
                </div>
                {/* <h2>Dashboard</h2> */}
                {this.state.un_answered_questions === true? 
                <div>
                    {this.props.un_answered_questions.map((id) => (
                        <div key={id}>
                        <Question id={id}/>
                        </div>
                     ))}
                </div>
                : 
                <div >
                    {this.props.answered_questions.map((id) => (
                        <div key={id}>
                        <Question id={id}/>
                        </div>
                     ))}
                </div>
                }
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, questions }) {
    return {
        answered_questions: Object.keys(questions)
        .filter((questionId) =>
        questions[questionId].optionOne.votes.includes(authedUser) ||
        questions[questionId].optionTwo.votes.includes(authedUser))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        un_answered_questions: Object.keys(questions)
        .filter((questionId) =>
        !questions[questionId].optionOne.votes.includes(authedUser) &&
        !questions[questionId].optionTwo.votes.includes(authedUser))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)  
    }
}

export default connect(mapStateToProps)(Dashboard)