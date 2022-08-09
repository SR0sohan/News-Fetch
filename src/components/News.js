import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = []
  constructor(){
    super();
    this.state ={
        articles: this.articles,
        loading :false
    }
  }

  async componentDidMount(){
            let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=5a265a187335421581803ddec83c50c2"
            let data = await fetch(url);
            let parsedData =await data.json();
            console.log(parsedData)
            this.setState({articles: parsedData.articles});

    }
  render() {
    return (
        <div className='container mt-3'>
            <h2>News Fetch -- Top trending news</h2>
            
            <div className='row mt-3'>

            {this.state.articles.map((element)=>{

              return <div className='col-md-4 mt-3' key={element.url}>
                        <NewsItem  title={element.title} description={element.description.slice(0, 45)} imageUrl={element.urlToImage} newsUrl ={element.url}/>
                     </div>
            })}
                
            </div>
         </div>
    )
  }
}

export default News
