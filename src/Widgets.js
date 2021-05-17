import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import './Widgets.css'
function Widgets() {

    const newsArticle =(heading, subtitle) => (
        <div className='widgets__article'>
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>


        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>Linkedln news</h2>
                <InfoIcon />
            </div>
            {newsArticle("Prueba de noticias", "Esto es una prueba")}
            {newsArticle("Prueba de noticias", "Esto es una prueba")}
            {newsArticle("Prueba de noticias", "Esto es una prueba")}
            {newsArticle("Prueba de noticias", "Esto es una prueba")}

        </div>

    )
}

export default Widgets
