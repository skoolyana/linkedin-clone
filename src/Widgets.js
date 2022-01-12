import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";




function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
        <div className='widgets_articleLeft'>
        <FiberManualRecordIcon/>

        </div>
        <div className='widgets_articleRight'>

            <h4>{heading}</h4>
            <p>{subtitle}</p>

        </div>
        </div>
    ); 



    return (
        <div className='widgets'> 
        <div className='widgets_header'>
            <h2>Linkedin News</h2>
            <InfoIcon></InfoIcon>
        </div>

        {newsArticle("Sunil is back","Top Article 1000 users")}
        {newsArticle("CoronaVirus New Variant is mild","Top News")}
        {newsArticle("Tesla hits new highs","Cars and Auto-300 readers")}
        {newsArticle("is Redux Too Good","Code-100 users")}
        {newsArticle("CoronaVirus Omicron is mild","Top News")}
            
        </div>
    )
}

export default Widgets
