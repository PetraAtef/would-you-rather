import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { removeAuthedUser } from '../state/action-creators/authedUser'
import styles from './Navbar.module.css';

function Navbar ({ users, authedUser, dispatch, history }) {
    const currentUser = users[authedUser]
  return (
    <div className={styles.nav}>
    <nav className={styles.nav}>
      {/* <ul className={styles.ul}>
        <li className={styles.il}> */}
          <NavLink to='/' exact activeClassName='active' className={styles.link}>
            Dashboard
          </NavLink>
        {/* </li>
        <li className={styles.il}> */}
          <NavLink to='/add' activeClassName='active' className={styles.link}>
            New Question
          </NavLink>
        {/* </li>
        <li className={styles.il}> */}
          <NavLink to='/leaderboard' activeClassName='active' className={styles.link}>
            Leaderboard
          </NavLink>
        {/* </li>
        <li className={styles.il}> */}
        <div className={styles.userInfo}>
          <section className={styles.userName}>Hello, {currentUser.name}</section>
        {/* </li>
        <li className={styles.il}> */}
          <button onClick={() => {
              dispatch(removeAuthedUser())
              history.push('/login')
            }} className={styles.logout}>Logout</button>
        </div>
        {/* </li>
      </ul> */}
    </nav>
    </div>
  )
}

const mapStateToProps = ({ authedUser, users }) => ({ authedUser, users })
export default withRouter(connect(mapStateToProps)(Navbar))