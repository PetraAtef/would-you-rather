import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hideLoading, showLoading } from 'react-redux-loading';
import { handleAddQuestion } from '../state/action-creators'
import styles from './Question.module.css';
// import { withRouter, Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
      optionOne: '',
      optionTwo: '',
    }

    optionOneHandler = (e) => {
        const optionOne = e.target.value
        this.setState(()=>({
            optionOne: optionOne
        }))
    }

    optionTwoHandler = (e) => {
        const optionTwo = e.target.value
        this.setState(()=>({
            optionTwo: optionTwo
        }))
    }

    submitHandler = (e)=>{
        e.preventDefault()
        const {optionOne, optionTwo} = this.state
        const authedUser = this.props.authedUser
        this.props.dispatch(showLoading())
        console.log(authedUser);
        this.props.dispatch(handleAddQuestion({optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser}))
        this.props.dispatch(hideLoading())
        this.props.history.push('/')
    }

    render() {
        return (
            <div className={styles.parent}>
                <div>
                    <h1 className={styles.addQuestion}>Add New Question</h1>
                </div>
                <div className={styles.newQuestion}>
                    
                    <form className={styles.newQuestionForm}>
                    <h1 className={styles.orange}>Would you rather...</h1>
                    <textarea className={styles.input} placeholder="Option One" onChange={this.optionOneHandler}></textarea>
                    <p className={styles.or}>Or</p>
                    <textarea className={styles.input} placeholder="Option Two" onChange={this.optionTwoHandler}></textarea>
                    </form>
                    <button className={styles.questionBtn} onClick={this.submitHandler}>Ask Question</button>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps)(NewQuestion)