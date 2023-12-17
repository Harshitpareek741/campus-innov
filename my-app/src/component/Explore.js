import React from 'react'
import './explore.css'

export default function Explore() {
  return (
    <div>
    <div className="myCards">
  <div className="container">
    <div className="card">
      <h3>Acadmic Projects</h3>
    </div>
    <div>
        <form action="/accad">
        <button className="btn-23">
        <span className="text">explore</span>
        <span aria-hidden="" className="marquee">
          Explore
        </span>
      </button>
        </form>
     
    </div>
  </div>
  <div className="container">
    <div className="card">
      <h3>Innovations</h3>
    </div>
    <div>
        <form action="/projects">
        <button   className="btn-23">
        <span className="text">explore</span>
        <span aria-hidden="" className="marquee">
          Explore
        </span>
      </button>
        </form>
     
      <div>
        <div></div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
