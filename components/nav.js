import React from 'react'
import Link from 'next/link'


// const logo = [
//   { href: '/', label: 'ZEIT' },
// ]
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

const Nav = () => (
  
  <nav>

    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
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
        font-size: 15px;
      }
      
    `}</style>
  </nav>
)

export default Nav
