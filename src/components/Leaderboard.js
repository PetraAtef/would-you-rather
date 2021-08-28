import React, { Component } from 'react'
import { connect } from 'react-redux';
import UserCard from './UserCard';
import styles from './Leaderboard.module.css';

class Leaderboard extends Component {
    render(){
        const users = this.props.users
        return(
            <div className={styles.parent}>
                <div>
                    <h1 className={styles.leaderboard}>Leaderboard</h1>
                </div>
                {users &&
                 Object.keys(users).length > 0 &&
                 Object.keys(users).map((id)=>(console.log(users[id]),{
                     
                    id: id,
                    name: users[id].name,
                    avatarURL: users[id].avatarURL,
                    answeredQuestions: Object.keys(users[id].answers).length,
                    askedQuestions: users[id].questions.length,
                    score:
                    Object.keys(users[id].answers).length +
                        users[id].questions.length,
                })).sort((a,b)=> b.score - a.score)
                .map((user) => (
                        <div key={user.id}>
                        <UserCard id={user.id}
                        avatarURL={user.avatarURL}
                        name={user.name}
                        answeredQuestions={user.answeredQuestions}
                        askedQuestions={user.askedQuestions}
                        score={user.score}
                        />
                        </div>
                     ))}
            </div>
        )
    }
}

function mapStateToProps ({ users}) {
    return {
      users
    }
}

export default connect(mapStateToProps)(Leaderboard)