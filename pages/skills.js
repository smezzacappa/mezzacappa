import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'


  

class Skills extends React.Component{
    
    setBg(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxOne').style.borderColor = "#" + randomColor;
  }
  setBgA(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwo').style.borderColor = "#" + randomColor;
  }
  setBgB(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxThree').style.borderColor = "#" + randomColor;
  }
  setBgC(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxFour').style.borderColor = "#" + randomColor;
  }
  setBgD(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxFive').style.borderColor = "#" + randomColor;
  }
  setBgE(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxSix').style.borderColor = "#" + randomColor;
  }
  setBgF(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxSeven').style.borderColor = "#" + randomColor;
  }
  setBgG(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxEight').style.borderColor = "#" + randomColor;
  }
  setBgH(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxNine').style.borderColor = "#" + randomColor;
  }
  setBgI(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTen').style.borderColor = "#" + randomColor;
  }
  setBgJ(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxEleven').style.borderColor = "#" + randomColor;
  }
  setBgK(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwelve').style.borderColor = "#" + randomColor;
  }
    setBgL(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxThirteen').style.borderColor = "#" + randomColor;
  }
  setBgM(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxFourteen').style.borderColor = "#" + randomColor;
  }
  setBgN(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxFifteen').style.borderColor = "#" + randomColor;
  }
  setBgO(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxSixteen').style.borderColor = "#" + randomColor;
  }
  setBgP(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxSeventeen').style.borderColor = "#" + randomColor;
  }
  setBgQ(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxEighteen').style.borderColor = "#" + randomColor;
  }
  setBgR(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxNineteen').style.borderColor = "#" + randomColor;
  }
  setBgS(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwenty').style.borderColor = "#" + randomColor;
  }
  setBgT(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwentyOne').style.borderColor = "#" + randomColor;
  }
  setBgU(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwentyTwo').style.borderColor = "#" + randomColor;
  }
  setBgV(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwentyThree').style.borderColor = "#" + randomColor;
  }
  setBgW(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwentyFour').style.borderColor = "#" + randomColor;
  }
  setBgX(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwentyFive').style.borderColor = "#" + randomColor;
  }
  setBgY(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwentySix').style.borderColor = "#" + randomColor;
  }
  setBgZ(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwentySeven').style.borderColor = "#" + randomColor;
  }
  setBgAA(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('boxTwentyEight').style.borderColor = "#" + randomColor;
  }
  

    render(){
        
        return(
  <div>
    <Head>
      <title>Steven Mezzacappa</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Skills</h1>
      <p className="description">
        <code>Here's What I Can Do</code> 
      </p>
 
      
     
        <div className="container" id="skills">
    <div className="row">
        <div className="card" id="boxOne" onMouseOver={this.setBg} >
    <p>React</p>
    </div>
    <div className="card" id="boxTwo" onMouseOver={this.setBgA}>
    <p>React Native</p>
    </div> 
    <div className="card" id="boxThree" onMouseOver={this.setBgB}>
    <p>React Router</p>
    </div> 
    </div>
    <div className="row">
    <div className="card" id="boxFour" onMouseOver={this.setBgC}>
    <p>NextJS</p>
    </div> 
    
    <div className="card" id="boxFive" onMouseOver={this.setBgD}>
    <p>Javascript</p>
    </div> 
    <div className="card" id="boxSix" onMouseOver={this.setBgE}>
    <p>JQuery</p>
    </div>
    </div>
    <div className="row">
    <div className="card" id="boxSeven" onMouseOver={this.setBgF}>
    <p>HTML5</p>
    </div> 
    <div className="card" id="boxEight" onMouseOver={this.setBgG}>
    <p>Bootstrap</p>
    </div> 
     </div>
   <div className="row">
    <div className="card" id="boxNine" onMouseOver={this.setBgH}>
    <p>CSS3</p>
    </div> 
    
    <div className="card" id="boxTen" onMouseOver={this.setBgI}>
    <p>SASS</p>
    </div> 
    </div>
    <div className="row">
    <div className="card" id="boxEleven" onMouseOver={this.setBgJ}>
    <p>JSX</p>
    </div> 
    <div className="card" id="boxTwelve" onMouseOver={this.setBgK}>
    <p>MaterializeCSS</p>
    </div> 
    
    </div>
    <div className="row">
   
    <div className="card" id="boxThirteen" onMouseOver={this.setBgL}>
    <p>Express</p>
    </div> 
    <div className="card" id="boxFourteen" onMouseOver={this.setBgM}>
    <p>Node.js</p>
    </div>
    </div>
    <div className="row">
    <div className="card" id="boxFifteen" onMouseOver={this.setBgN}>
    <p>RESTful</p>
    </div>
    
    
    <div className="card" id="boxSixteen" onMouseOver={this.setBgO}>
    <p>AJAX</p>
    </div> 
    </div>
    <div className="row">
    <div className="card" id="boxSeventeen" onMouseOver={this.setBgP}>
    <p>AWS</p>
    </div> 
    <div className="card" id="boxEighteen" onMouseOver={this.setBgQ}>
    <p>Google Cloud Platform</p>
    </div> 
    </div>
    <div className="row">
    <div className="card" id="boxNineteen" onMouseOver={this.setBgR}>
    <p>Firebase</p>
    </div> 
    <div className="card" id="boxTwenty" onMouseOver={this.setBgS}>
    <p>MySQL</p>
    </div> 
    <div className="card" id="boxTwentyOne" onMouseOver={this.setBgT}>
    <p>MongoDB</p>
    </div> 
    </div>
    <div className="row">
    <div className="card" id="boxTwentyTwo" onMouseOver={this.setBgU}>
    <p>Mongoose</p>
    </div> 
    
    <div className="card" id="boxTwentyThree" onMouseOver={this.setBgV}>
    <p>JSON</p>
    </div>
    </div>
    <div className="row">
    <div className="card" id="boxTwentyFour" onMouseOver={this.setBgW}>
    <p>Adobe Photoshop</p>
    </div> 
    <div className="card" id="boxTwentyFive" onMouseOver={this.setBgX}>
    <p>Adobe Lightroom</p>
    </div> 
    </div>
    <div className="row">
    <div className="card" id="boxTwentySix" onMouseOver={this.setBgY}>
    <p>Adobe Premier</p>
    </div> 
    <div className="card" id="boxTwentySeven" onMouseOver={this.setBgZ}>
    <p>Adobe Spark</p>
    </div>
    </div>
    <div className="row">
    <div className="card" id="boxTwentyEight" onMouseOver={this.setBgAA}>
    <p>Git</p>
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
      }
      p {
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
    //  .p{
    //     font-size: 2em !important;
    //   }
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
        text-align: center;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
        border-radius: 5px;
        background: rgba(224, 224, 224, .5) ;
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
      #boxOne{
          text-align: center;
      }
      #boxOne:hover {
        border-color: white;
      }
    `}</style>
  </div>
        )
    }
    }

export default Skills
