import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


const logo = [
  { href: '/', label: 'ZEIT' },
]
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/portfolio', label: 'Porfolio' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://github.com/smezzacappa', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

function Navigation(){
  return <div>
<Head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
  </Head>
  
<nav className="navbar navbar-expand-sm navbar-light">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
      {links.map(({ key, href, label }) => (
        <li className="nav-item" key={key}>
          <a className="nav-link" href={href}>{label}</a>
        </li>
      ))}
    </ul>
</div>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      
      nav {
        text-align: center;
        display: flex !important;
        justify-content: flex-end!important;
       
      }
      ul {
        display: flex;
        justify-content: flex-end;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
        color: black;
      }
      a {
        color: #000000;
        text-decoration: none;
        font-size: 17px;
      }
      
    `}</style>
  </nav>
  </div>
}

export default Navigation
