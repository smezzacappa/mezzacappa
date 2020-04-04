import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const About = () => (
  <div>
    <Head>
      <title>Steven Mezzacappa</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
<div className="container">
    <Nav />

    <div className="hero">
      <h1 className="title">About Me</h1>
      <p className="description">
        <code>Here's What I Am</code> 
      </p>

      <div className="row">
        <div className="card">
          <h3>I am:</h3>
          <p>Front End Developer.</p>
        </div>
        <div className="card">
          <h3>I am:</h3>
          <p>Graphic Designer.</p>
        </div>
        </div>
        <div className="row">
        <div className="card">
          <h3>I am:</h3>
          <p>UX|UI Designer.</p>
        </div>
        <div className="card">
          <h3>I am:</h3>
          <p>Photographer.</p>
        </div>
        
        <div className="card">
          <h3>I am:</h3>
          <p>Artist.</p>
        </div>
        </div>
        <div className="row">
        <div className="card">
          <h3>I am:</h3>
          <p>Marvel Fantantic.</p>
        </div>
        <div className="card">
          <h3>I am:</h3>
          <p>A Dog Person.</p>
        </div>
        <div className="card">
          <h3>I am:</h3>
          <p>Fitness Enthusiast.</p>
        </div>
      
      
    </div>
    </div>
    </div>
    <style jsx>{`
     :global(body){
        background: url('/static/images/background.jpeg');
        width: 100%;
    height: 90vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
       }
      .hero {
        width: 100%;
        color: #333;
        letter-spacing: 2px;
        text-shadow: 0px 0px 8px white;
      }
      .hero p {
        font-size: 1.5em;
        
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 56px;
        font-weight: 700;
      }
      .title,
      .description {
        text-align: center;
      }
      
      .description{
        text-shadow: 0px 0px 8px black;
      }
      code{
        color:white;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
        border-radius: 5px;
        background: rgba(224, 224, 224, .5) ;
        box-shadow: 0px 0px 5px black;
      }
      .card:hover {
        border-color: white;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 17px;
        color: #333;
      }
      #skills{
          width: 100%;
        //   line-height: 20px;
      }
      #boxOne{
        //   margin: 20px;
          width:20%;
          text-align: center;
      }
    `}</style>
  </div>
)

export default About
