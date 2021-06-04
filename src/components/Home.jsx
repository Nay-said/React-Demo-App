import React from 'react'

function Home() {
  return (
    <div className="container-fluid container-xl px-xl-5">
      <div className="row">
        <div className="col-2 col-md-4"></div>
        <div className="col-8 col-md-4">
          <div className="card mt-3 mx-auto">
            <img src="/react logo.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4 className="card-title">Welcome to React demo app!</h4>
              <p className="card-text">
                This app is built for STEM research project 
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 col-md-4"></div>
      </div>
    </div>
  )
}

export default Home
