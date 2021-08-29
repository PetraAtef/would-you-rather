import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, Redirect } from 'react-router-dom';
import styles from './ViewQuestion.module.css';
import ProgressBar from './ProgressBar'
import { handleAnswerQuestion } from '../state/action-creators';
// import {withRouter} from 'react-router'

class ViewQuestion extends Component {
    state = {
        option:'',
        redirect: null
    }

    onSelect = (e)=>{
        this.setState({
            option: e.target.value
        })
    }

    onSubmit = (e)=>{
        const answer = this.state.option
        const authedUser = this.props.authedUser
        const qid = this.props.match.params.id
        console.log({ authedUser, qid, answer });
        if(answer){
            this.props.dispatch(handleAnswerQuestion({ authedUser, qid, answer }))
        }
        // this.props.history.push('/')
    }

    render() {
        const id = this.props.match.params.id
        const question = this.props.questions[id]
        if(!question) {
            return <Redirect to='/404'/>
        }
        const authedUser = this.props.authedUser
        const {author, optionOne, optionTwo } = question
        const totalVotesOne = optionOne.votes.length
        const totalVotesTwo = optionTwo.votes.length
        const totalVotes = totalVotesOne + totalVotesTwo
        const VotesOnePercentage = (totalVotesOne/totalVotes)*100
        const VotesTwoPercentage = (totalVotesTwo/totalVotes)*100
        const answered= optionOne.votes.includes(authedUser) ||
        optionTwo.votes.includes(authedUser)
        return(
            <div className={styles.parent}>
            <div className={styles.question}>
                <div className={styles.avatarDiv}>
                <img
                    src={this.props.users[author].avatarURL}
                    alt={`Avatar of ${author}`}
                    className={styles.avatar}
                />
                </div>
                {answered?
                <div className={styles.centerDivAnswered}>
                    <h1 className={styles.orange}>Would you rather...</h1>
                    <div className={styles.displayFlex}>
                    <ProgressBar color='#6CBDE8' percentage={VotesOnePercentage}/>
                    {optionOne.votes.includes(authedUser)?
                    <img src={this.props.users[authedUser].avatarURL}
                    className={styles.userAvatar}/>
                    :<div></div>
                    }</div>
                    <h6>{totalVotesOne} out of {totalVotes} votes</h6>
                    <p className={styles.or}>Or</p>
                    <div className={styles.displayFlex}>
                    <ProgressBar color='#6CBDE8' percentage={VotesTwoPercentage} />
                    {optionTwo.votes.includes(authedUser)?
                    <img src={this.props.users[authedUser].avatarURL}
                    className={styles.userAvatar}/>
                    :<div></div>
                    }</div>
                    <h6>{totalVotesTwo} out of {totalVotes} votes</h6>
                </div>
                :
                <div className={styles.centerDivNotAnswered}>
                    <div className={styles.centerDivChoices}>
                    <form className={styles.centerDivForm}>
                    <h1 className={styles.orange}>Would you rather...</h1>
                    <input type='radio' className={styles.option} onChange={this.onSelect} name='choices' value='optionOne'/><p className={styles.option}>{optionOne.text}</p>
                    <p className={styles.or}>Or</p>
                    <input type='radio' className={styles.option} onChange={this.onSelect} name='choices' value='optionTwo'/><p className={styles.option}>{optionTwo.text}</p>
                    </form>
                    </div>
                    <div className={styles.buttonDiv}>
                    <button className={styles.questionBtn} onClick={this.onSubmit} >Submit</button>
                    </div>
                </div>
                }
            </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}) {
    // const avatarURL: authedUser[avatarURL]
    return{
        authedUser,
        questions,
        users
    }
}


export default withRouter(connect(mapStateToProps)(ViewQuestion))