import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return ( 
        <div className="sidebar">
            <div className='sidebar__top'>
                <img src='https://images.unsplash.com/photo-1563700901892-eefa98bb2152?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' alt='' />
                <Avatar className='sidebar__avatar'/>
                <h2>Juan José</h2>
                <h4>juanjovc21@live.com</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Vistas al perfil</p>
                    <p className='sidebar__statNumber'>2,543</p>

                </div>
                <div className='sidebar__stat'>
                    <p>Vistas en los post.</p>
                    <p className='sidebar__statNumber'>2,448</p>
                </div>
            </div>

            <div className='sidebar__botton'>
                <p>Reciente</p>
                {recentItem("reactjs")}
                {recentItem('software')}
                {recentItem('programacion')}
                {recentItem('linkedin')}
                {recentItem('javascript')}

            </div>
        </div>
    )
}

export default Sidebar
