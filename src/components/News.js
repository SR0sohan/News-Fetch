import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <div className='container mt-3'>
            <h2>News Fetch -- Top trending news</h2>
            <div className='row mt-3'>
                <div className='col-md-4'>
                    <NewsItem title="mytitle" description="mydesc"/>
                </div>
                <div className='col-md-4'>
                    <NewsItem title="mytitle" description="mydesc"/>
                </div>
                <div className='col-md-4'>
                    <NewsItem title="mytitle" description="mydesc"/>
                </div>
            </div>
         </div>
      </div>
    )
  }
}

export default News
