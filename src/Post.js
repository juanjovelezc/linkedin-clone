import { Avatar } from '@material-ui/core'
import React,{forwardRef} from 'react'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutLinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutLinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import InputOption from './InputOption'

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post__header'>
                <Avatar src= {photoUrl} >{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post__body'>
                <p>{message}</p>
            </div>

            <div className='post__buttons'>
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Me gusta' color= 'gray' />
                <InputOption Icon={ChatOutLinedIcon} title='Comentar' color= 'gray' />
                <InputOption Icon={ShareOutLinedIcon} title='Compartir' color= 'gray' />
                <InputOption Icon={SendOutlinedIcon} title='Enviar' color= 'gray' />

            </div>
        </div>
    )

})

export default Post
