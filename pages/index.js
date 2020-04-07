import React from 'react'
import Head from 'next/head'
import Navigation from '../components/nav'
import NavBarBot from '../components/footer'

const Home = () => (
  <div>
    <Head>
      <title>Steven Mezzacappa</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navigation />
<div className="container">
    <div className="hero">
      <h1 className="title">Steven Mezzacappa</h1>
      <p className="description">
        <code>Front End Web Developer</code> 
      </p>
      <div className="row">
        <div className="container" id="subtitle">
        <h1>
          Coming Soon To A Browser Near You.
        </h1>
        </div>
      </div>
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
        text-shadow: 0px 0px 8px white;
      }
    .hero p{
        font-size: 1.5em !important;
        color: #ffffff;
        text-shadow: 0px 0px 8px black;
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
        color: white!important;

      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      #subtitle{
        border: black;
        border-style: solid;
        padding: 15px;
        border-radius: 5px;
        text-align: center;
        box-shadow: 0px 0px 5px black;
      }
    }
   
      @media only screen and (max-width: 685px){
        .hero {
          width: 100%;
          color: #333;
          letter-spacing: 2px;
          padding: 20px;
          text-align: center;
        }
      .hero p{
          font-size: 1em !important;
          text-align: center;
        }
        code{
          font-size: 1.2em;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
          text-align: center;
        }
        .title,
        .description {
          text-align: center;
        }
        #subtitle{
          border: black;
          border-style: solid;
          // padding: 15px;
          border-radius: 5px;
          width: 75%;
          text-align: center;
          margin-bottom: 1em;
      }
     
    `}</style>
  </div>
)

export default Home
