import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import styles from './Question.module.css';
import { Redirect } from 'react-router-dom';

class Question extends Component {
    onView=(e)=>{
        this.props.history.push(`/questions/${this.props.id}`)
    }
    render() {
        const { id, author, optionOne, optionTwo } = this.props.question
        // const {history} = this.props.history
        return(
            <div className={styles.question}>
                <img
                    src={this.props.users[author].avatarURL}
                    alt={`Avatar of ${author}`}
                    className={styles.avatar}
                />
                <div className={styles.centerDiv}>
                    <h1 className={styles.orange}>Would you rather...</h1>
                    <p className={styles.option}>{optionOne.text}</p>
                    <p className={styles.or}>Or</p>
                    <p className={styles.option}>{optionTwo.text}</p>
                </div>
                
                    <Link to={`questions/${id}`} className={styles.questionBtn}>
                        <button className={styles.questionBtn}>View Poll</button>
                    </Link>
                
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]
    return{
        id,
        authedUser,
        question: question,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Question))