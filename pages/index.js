import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div className="container">
    <Head>
      <title>Steven Mezzacappa</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

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
        font-size: 1.5em !important;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 56px;
      }
      .title,
      .description {
        text-align: center;
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
      }
      // .card {
      //   padding: 18px 18px 24px;
      //   width: 220px;
      //   text-align: left;
      //   text-decoration: none;
      //   color: #434343;
      //   border: 1px solid #9b9b9b;
      // }
      // .card:hover {
      //   border-color: #067df7;
      // }
      // .card h3 {
      //   margin: 0;
      //   color: #067df7;
      //   font-size: 18px;
      // }
      // .card p {
      //   margin: 0;
      //   padding: 12px 0 0;
      //   font-size: 13px;
      //   color: #333;
      // }
      @media only screen and (max-width: 600px){
        .hero {
          width: 100%;
          color: #333;
          letter-spacing: 2px;
        }
      .hero p{
          font-size: 1.5em !important;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 56px;
        }
        .title,
        .description {
          text-align: center;
        }
        #subtitle{
          border: black;
          border-style: solid;
          padding: 15px;
          border-radius: 5px;
          width: 75%;
      }
    `}</style>
  </div>
)

export default Home
