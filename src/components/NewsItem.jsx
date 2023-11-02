import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const NewsItem = (props) => {

    const colorDecider = (category) =>{
        if (category === 'sports'){
            return 'info'
        }
        else if (category === 'business'){
            return 'danger'
        }
        else{
            return 'success'
        }
    }
        let {title,description,imageUrl,url,publishedDate,authorName,category} = props
        return (
            <div className="card" style={{width: "18rem"}}>
            <span className={`position-absolute top-0 start-100 translate-middle p-2 bg-${colorDecider(category)} border border-light rounded-circle`}></span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p>Date: {publishedDate}</p>
                <p>Author: {authorName}</p>
                <Link to={url} target='_blank' className="btn btn-primary">Read More</Link>
            </div>
            </div>
        )
}

export default NewsItem;