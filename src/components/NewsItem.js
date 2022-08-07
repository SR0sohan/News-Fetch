import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://cdn.cnn.com/cnnnext/dam/assets/220805185254-anne-heche-file-031222-super-tease.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/News" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
