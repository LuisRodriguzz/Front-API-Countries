import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import ciudad from './ciudad.gif'

export default function Start() {
  return (
    <div className='main'>
      <div className='img-container'>
      <img alt='playa' src={ciudad}></img>
      </div>
      <section className='showcase'>
        <div className='content'>
          <div>
            <h1 className='title'>SEARCH YOUR BEST DESTINY FOR YOU!</h1>
          </div>
          <div>
            <Link to='/home' >
              <button className='button'>
              LET'S START
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}