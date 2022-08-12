import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill  bg-success" style={{left:'50%', zIndex:'1'}}>{source}
                  <span className="visually-hidden">unread messages</span>
                </span>
                <img src={!imageUrl?"https://cdn.vox-cdn.com/thumbor/8gRme1rc1NXx0LK1iJB7isqHtD0=/0x86:1200x714/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23936285/OWL_Press_Asset_BZ65LV.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-success">By {!author? "Unknown": author},at{new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">Read more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
