import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  
  constructor(){
    super();
    this.state ={
      articles :[],
        // articles: this.articles,
        loading :false,
        page:1
    }
  }

  async updateNews(){
            const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=5a265a187335421581803ddec83c50c2&page=${this.state.page}&pagesize=${this.props.pageSize}`
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData =await data.json();
            console.log(parsedData)
            this.setState({
              articles: parsedData.articles,
              totalResults:parsedData.totalResults,
              loading:false
            });
          
  }

  async componentDidMount(){
            // let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=5a265a187335421581803ddec83c50c2&pagesize=${this.props.pageSize}`
            // this.setState({loading:true})
            // let data = await fetch(url);
            // let parsedData =await data.json();
            // console.log(parsedData)
            // this.setState({
            //   articles: parsedData.articles,
            //   totalResults:parsedData.totalResults,
            //   loading:false
            // });
            this.updateNews();

    }
    handlePrevious = async ()=>{
        // console.log('previous')
        // let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=5a265a187335421581803ddec83c50c2&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
        //     this.setState({loading:true})
        //     let data = await fetch(url);
        //     let parsedData =await data.json();
        //     console.log(parsedData)
        //     this.setState({
        //       page: this.state.page-1,
        //       articles: parsedData.articles,
        //       loading:false
        //     })
        this.setState({page:this.state.page-1})
        this.updateNews()
    }

    handleNext = async ()=>{
        // console.log('next')
        // if (this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)){

        // }
        // else{ 
        //   let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=5a265a187335421581803ddec83c50c2&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
        //   this.setState({loading:true})
        //   let data = await fetch(url);
        //   let parsedData =await data.json();
        //   console.log(parsedData)
        //   this.setState({
        //     page: this.state.page+1,
        //     articles: parsedData.articles,
        //     loading:false
        //   })
        // }
        this.setState({page:this.state.page+1})
        this.updateNews()
    }
  render() {
    return (
        <div className='container mt-3'>
            <h2 className='text-center'>News Fetch -- Top trending news</h2>
            {this.state.loading && <Spinner/>}
            <div className='row mt-3'>

                {!this.state.loading && this.state.articles.map((element)=>{

                  return <div className='col-md-4 mt-3' key={element.url}>
                            <NewsItem  title={element.title} description={element.description?element.description.slice(0, 50):""} imageUrl={element.urlToImage} newsUrl ={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                        
                })}
                
            </div>
              <div className='mb-5 d-flex justify-content-between mt-3'>
              <button disabled={this.state.page<=1} onClick={this.handlePrevious}  type="button" className="btn btn-success">&larr; Previous</button>

              <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNext} type="button" className="btn btn-success"> Next &rarr;</button>
              </div>
         </div>
    )
  }
}

export default News
