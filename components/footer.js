import React from 'react';
import Head from 'next/head'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {FaTwitter, FaGithub, FaSoundcloud} from 'react-icons/fa'
const NavBarBot = () =>(
    <div>
        <Head>
        <link rel="stylesheet" href="https://use.typekit.net/idq7mvl.css"/>
        </Head>
    <Navbar  bg="dark" variant="dark" fixed="bottom" className="Links">
    <Container className="NavIcons">
    <a href="https://www.twitter.com/s_mezzacappa/" id="twitter"><FaTwitter/></a>
    <a href="https://www.github.com/smezzacappa" id="github"><FaGithub/></a>
    {/* <Nav.Link href="https://soundcloud.com/djguylewis"><FaSoundcloud/></Nav.Link> */}
    <Navbar.Brand> <a href="/" >Steven Mezzacappa </a></Navbar.Brand>
    </Container>
    </Navbar>
    <style jsx>{`
   a{
    font-family: suave-script-pro, sans-serif!important;
    font-weight: 400!important;
    font-style: normal!important;
    color: #ffffff;
   font-size: 1em;
   letter-spacing: 3px;
   }
   #twitter{
       font-size: 1.5em;
   }
   #github{
       font-size: 1.5em;
   }
   @media only and screen(max-width: 400px){
    a{
       font-size: .5em;
       }
       #twitter{
           font-size: 1em!important;
       }
       #github{
           font-size: 1em!important;
       }
   }
  `}</style>
  </div>
    )
    
    export default NavBarBot;