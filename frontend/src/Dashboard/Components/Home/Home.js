import React from 'react'
import './Home.css'

import TopBar from '../TopBar/TopBar'
import Header from '../Header/Header'
import CustomCalendar from '../Calender/Calendar'
import Statistics from '../Statistics/Statistics'
import CourseList from '../CourseList/CourseList'

function Home() {
  return (
    <>
    <div className="main-content">
        <TopBar />
        <div className='header-part'>
        <Header />
        <CustomCalendar />
        </div>
        <Statistics/>      
      </div>
      <div className="header-container">
        <CourseList />
      </div>
    </>
  )
}

export default Home