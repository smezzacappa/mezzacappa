import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import NavBarBot from '../components/footer';


const Portfolio = () => (
  <div>
    <Head>
      <title>Steven Mezzacappa</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
    <h1 className="title">Portfolio</h1>
    <p className="description">
        <code>Here's What I've Done</code> 
      </p>
      <div className="row">
        <a href="https://sageusa.org/sageconnect" className="card">
          <h4>SAGE</h4>
          <p>UX/UI & Frontend Dev</p>
        </a>
      </div>
    <div className="row">
        <a href="https://music.apple.com/us/album/mary-did-you-know/1491892843?i=1491892853" className="card">
          <h4>CHRIS WEAVER</h4>
          <p>Cover Art Designer</p>
        </a>
      </div>
      <div className="row">
      <a href="https://alecbrian.com" className="card">
          <h4>DJ ALEC BRIAN</h4>
          <p>Logo Design & Promotion Art Designer</p>
        </a>
      </div>
      <div className="row">
        <a href="https://dj-guy-lewis.com" className="card">
          
          <h4>DJ GUY LEWIS</h4>
          <p>Designer & Developer</p>
        </a>
        </div>
        <div className="row">
        <a href="https://calibrparty.com" className="card">
          
          <h4>CALIBR PARTY</h4>
          <p>Designer & Developer</p>
        </a>
        </div>
        <div className="row">
        <a
          href="https://maleroomnyc.com"
          className="card"
        > 
          <h4>MALEROOM NYC</h4>
          <p>Designer & Developer</p>
        </a>
        </div> 
    </div>
<NavBarBot/>
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
      }
      .hero p{
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
      code{
        color: white;
        text-shadow: 0px 0px 8px black;

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
        width: 300px;
        text-align: center;
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
      .card h4{
        font-size: 1.5rem;
        margin: .5em;
      }
      .card p {
        margin: 0;
        // padding: 12px 0 0;
        font-size: 17px;
        color: #333;
      }
      @media only screen and (max-width:775px){
        .hero{
          padding-bottom: 2em!important;
        }
        .card{
          margin-bottom:1.5em!important;
        }
    `}</style>
  </div>
)

export default Portfolio;
