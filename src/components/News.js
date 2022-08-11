import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = []
  constructor(){
    super();
    this.state ={
        articles: this.articles,
        loading :false,
        page:1
    }
  }

  async componentDidMount(){
            let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=5a265a187335421581803ddec83c50c2&pagesize=20"
            let data = await fetch(url);
            let parsedData =await data.json();
            console.log(parsedData)
            this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults});

    }
    handlePrevious = async ()=>{
        console.log('previous')
        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=5a265a187335421581803ddec83c50c2&page=${this.state.page - 1}&pagesize=20`
            let data = await fetch(url);
            let parsedData =await data.json();
            console.log(parsedData)
            this.setState({
              page: this.state.page-1,
              articles: parsedData.articles
            })
    }

    handleNext = async ()=>{
        console.log('next')
        if (this.state.page + 1>Math.ceil(this.state.totalResults/20)){

        }
        else{ 
          let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=5a265a187335421581803ddec83c50c2&page=${this.state.page + 1}&pagesize=20`
          let data = await fetch(url);
          let parsedData =await data.json();
          console.log(parsedData)
          this.setState({
            page: this.state.page+1,
            articles: parsedData.articles
          })
        }
    }
  render() {
    return (
        <div className='container mt-3'>
            <h2>News Fetch -- Top trending news</h2>
            
            <div className='row mt-3'>

                {this.state.articles.map((element)=>{

                  return <div className='col-md-4 mt-3' key={element.url}>
                            <NewsItem  title={element.title} description={element.description?element.description.slice(0, 50):""} imageUrl={element.urlToImage} newsUrl ={element.url}/>
                        </div>
                })}
                
            </div>
              <div className='mb-5 d-flex justify-content-between mt-3'>
              <button disabled={this.state.page<=1} onClick={this.handlePrevious}  type="button" className="btn btn-success">&larr; Previous</button>

              <button onClick={this.handleNext} type="button" className="btn btn-success"> Next &rarr;</button>
              </div>
         </div>
    )
  }
}

export default News
