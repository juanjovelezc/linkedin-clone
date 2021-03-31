import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
function Header() {
    return (
        <div className='header'>

            <div className='header__left'>
                <img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt=''/>

                <div className='header__search'>
                    <SearchIcon />
                    
                    <input tpye='text'/>
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Inicio'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='Mi cuenta'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Trabajo' />
                <HeaderOption Icon={ChatIcon} title='Mensajes' />
                <HeaderOption Icon={NotificationsIcon} title='Notificaciones' />
                <HeaderOption avatar="https://z-p4-instagram.feoh3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/130255906_2866638973658547_663171176675110769_n.jpg?_nc_ht=z-p4-instagram.feoh3-1.fna.fbcdn.net&_nc_ohc=9J6lh68eN8QAX9qq3Jd&tp=1&oh=dc5bfd063eafcf3aca47c7586560f7a4&oe=603C9B91" title='Me'/>

            </div>
        </div>
    )
}

export default Header