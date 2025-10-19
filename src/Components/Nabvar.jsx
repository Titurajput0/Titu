import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Nabvar = () => {
  return (
    <>
      <div style={{backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          
          }}>

        <img src="sedulous_logo.png" alt="not show" 
        style={{paddingLeft: '50px',}}/>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingLeft: '100px'
        }}>

        <NavLink style={({ isActive }) => ({
          color: isActive ? "white" : "blue",
          padding: "38px 10px",
          borderRadius: "5px",
          textDecoration: "non"
        })} to="/">Home</NavLink>

        <NavLink style={({ isActive }) => ({
          color: isActive ? "white" : "blue",
          padding: "38px 9px",
          borderRadius: "5px",
          textDecoration: "non"
        })} to="/">Company</NavLink>

        <NavLink style={({ isActive }) => ({
          color: isActive ? "white" : "blue",
          padding: "38px 9px",
          borderRadius: "5px",
          textDecoration: "non"
        })} to="/">Services</NavLink>

        <NavLink style={({ isActive }) => ({
          color: isActive ? "white" : "blue",
          padding: "38px 9px",
          borderRadius: "5px",
          textDecoration: "non"
        })} to="/">Portfolio</NavLink>

        <NavLink style={({ isActive }) => ({
          color: isActive ? "white" : "blue",
          padding: "38px 9px",
          borderRadius: "5px",
          textDecoration: "non"
        })} to="/">Career</NavLink>

        <NavLink style={({ isActive }) => ({
          color: isActive ? "white" : "blue",
          padding: "38px 9px",
          borderRadius: "5px",
          textDecoration: "non"
        })} to="/">Blog</NavLink>

        <NavLink style={({ isActive }) => ({
          color: isActive ? "white" : "blue",
          padding: "38px 9px",
          borderRadius: "5px",
          textDecoration: "non"
        })} to="/">Awards/Certificates</NavLink>

        <NavLink style={({ isActive }) => ({
          color: isActive ? "white" : "blue",
          padding: "38px 9px",
          borderRadius: "5px",
          textDecoration: "non"
        })} to="/">ContactUs</NavLink>

        <button style={{ 
            color: '#ffffff', 
            backgroundColor: '#06badb',
            padding: '17px 28px',
            font: '16px barlow', 
            marginRight: '20px',
           
           
        }}>Get A Quote</button>
        </div>
            
      </div>
    </>
  )
}

export default Nabvar
