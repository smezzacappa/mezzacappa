import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const links = [
  { href: '/', label: '{ Home }' },
  { href: '/about', label: '{ About }' },
  { href: '/skills', label: '{ Skills }' },
  { href: '/portfolio', label: '{ Portfolio }' },
  { href: '/contact', label: '{ Contact }' },
  { href: 'https://github.com/smezzacappa', label: '{ GitHub }' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

function Navigation(){
  return <div>
<Head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
  </Head>
  
  <Navbar expand="md" >
  <Navbar.Toggle aria-controls="basic-navbar-nav " />
  <Navbar.Collapse id="basic-navbar-nav mr-auto">
    <Nav className="ml-auto">
    <ul className="navbar-nav mr-auto">
      {links.map(({ key, href, label }) => (
        <li className="nav-item" key={key}>
          <a className="nav-link" href={href}>{label}</a>
        </li>
      ))}
    </ul>
    </Nav>
    </Navbar.Collapse>
</Navbar>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      // nav {
      //   text-align: center;
      //   display: flex !important;
      //   justify-content: flex-start!important;
      // }
      // ul {
      //   display: flex;
      //   justify-content: flex-end;
      // }
      // nav > ul {
      //   padding: 4px 16px;
      // }
      li {
        display: flex;
        padding: 6px 8px;
        font-weight: 400;
        // color: black!important;
      
      }
      a {
        color: black!important;
        text-decoration: none;
        font-size: 17px;
      }
      
    `}</style>
 
</div>
 
}

export default Navigation
