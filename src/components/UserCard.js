import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from './Leaderboard.module.css';

class UserCard extends Component {
    
    render(){
        // const {name, avatarURL, questions, answers} = this.props.user
        // const asked_questions= questions.length
        // const answered_questions= answers.length
        // const score= questions.length + answers.length
        const { avatarURL, name, answeredQuestions, askedQuestions, score } = this.props
        return(
            <div className={styles.userCard}>
                <div className={styles.avatarDiv}>
                    <img src={avatarURL} className={styles.avatar}/>
                </div>
                <div className={styles.centerDiv}> 
                    <h2 className={styles.orange}>{name}</h2>
                    <p>Asked Questions: {askedQuestions}</p>
                    <hr/>
                    <p>Answered Questions: {answeredQuestions}</p>
                </div>
                <div className={styles.scoreDiv}>
                    <div className={styles.score}><div className={styles.section}>{score}</div></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({users}, { avatarURL, name, answeredQuestions, askedQuestions, score }) {
    return{
        avatarURL,
        name,
        answeredQuestions,
        askedQuestions,
        score 
    }
}

export default connect(mapStateToProps)(UserCard)