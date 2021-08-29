import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toast, ToastContainer  } from 'react-toastify';
import { setAuthedUser } from '../state/action-creators/authedUser';
import styles from './Login.module.css';
// import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
class Login extends Component {
    state = {
        authedUser : ''
    }

    chooseUser = (event) => {
        this.setState({ authedUser: event.target.value })
        this.props.dispatch(setAuthedUser(event.target.value))
        // this.props.history.push('/')
    }
    
    onButtonClick = (event) => {
        event.preventDefault()

        if (this.state.authedUser) {
          this.props.history.push('/')
        this.props.dispatch(setAuthedUser(this.state.authedUser))
        } else {
            //msh sha3'al
          toast('Please Select a user first', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
        }
    }

    render(){

        return (

            <div className={styles.parent}>
                        <ToastContainer />

                <div className={styles.container}>
                
                <p className={styles.login}>LOGIN</p>
                
                <select className={styles.input} id="login" name="login" onChange={this.chooseUser} value='Select User'>
                    <option key='default' value='Select User' disabled>Select User</option>
                    {this.props.users.map((user) => (
                        <option value={user.id} key={user.id}>{user.name}</option>
                        ))}
                </select>
    
                <button className={styles.button} onClick={this.onButtonClick}>
                    Continue
                </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users, authedUser }) {
    return {
      users :  Object.keys(users)
      .map((userId) => ({
        // avatarURL: users[userId].avatarURL,
        id: users[userId].id,
        name: users[userId].name,
      })),
      authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Login))
