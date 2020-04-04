import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Contact = () => (
  <div>
    <Head>
      <title>Steven Mezzacappa</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Contact</h1>
      <p className="description">
        <code>Here's How To Reach Me</code> 
      </p>

      <div className="row">
        {/* <a href="./about" className="card">
          <h3>What I Do &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a href="./portfolio" className="card">
          <h3>What I've Done&rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a> */}
        <a
          href="mailto:mezzacappa.steven@gmail.com"
          className="card"
        >
          <h3>How To Reach Me&rarr;</h3>
          <p>Click This Box To Send Me An Email!</p>
        </a>
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
      .card {
        padding: 18px 25px 18px;
        width: 350px;
        text-align: center;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: white;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 20px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 17px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Contact
