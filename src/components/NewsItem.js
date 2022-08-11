import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
            <div className="card">
                <img src={!imageUrl?"https://cdn.vox-cdn.com/thumbor/8gRme1rc1NXx0LK1iJB7isqHtD0=/0x86:1200x714/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23936285/OWL_Press_Asset_BZ65LV.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">Read more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
