import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [articles,setArticles] = useState([])
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         page: 1,
    //         articles: [],
    //         totalResults:0
    //     }
    // }

    const fetchMoreData = async () =>{
        // this.setState({
        //     page:this.state.page + 1
        // })
        try {
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&page=${state.page}&category=${props.category}`)
            let parsed_data = await data.json()
            // this.setState({
                //     articles: this.state.articles.concat(parsed_data.articles),
                //     totalResults: this.articles.length
                // })
            setPage(page+1)
            setArticles(articles.concat(parsed_data.articles))
            setTotalResults(articles.articles.length)
        }
        catch (error) {
            console.log("ERRROR IS", error)
        }
    }

    const updateNews = async () => {
        // this.props.setProgress(10);
        try {
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&page=${page}&category=${props.category}`)
            // this.props.setProgress(30);
            let parsed_data = await data.json()
            console.log(props.setProgress.loadingBarRef)
            // this.props.setProgress(60);
            // this.setState({
            //     articles: parsed_data.articles,
            //     // totalResults: this.articles.length
            // })
            setArticles(parsed_data.articles)
            setTotalResults(articles.articles.length)
        }
        catch (error) {
            console.log("ERRROR IS", error)
        }
        // this.props.setProgress(100);
    }

    useEffect(()=>{
        updateNews();
    },[])
    // async componentDidMount() {
    //     // try {
    //     //     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.apiKey}&page=1&category=${this.props.category}`)
    //     //     let parsed_data = await data.json()
    //     //     this.setState({
    //     //         articles: parsed_data.articles,
    //     //         totalResults: this.state.articles.length
    //     //     })
    //     // }
    //     // catch (error) {
    //     //     console.log("ERRROR IS", error)
    //     // }
    //     this.updateNews();
    // }

    const gotoprevpage = async () => {
        // try{
        //     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.apiKey}&page=${this.state.page -1}`)
        //     let parsed_data = await data.json()
        //     this.setState({
        //         articles:parsed_data.articles

        //     })
        // }
        // catch (error){
        //     console.log("ERRROR IS",error)
        // }
        // this.setState({
        //     page: this.state.page - 1
        // });
        setPage(page-1)
        this.updateNews();
    }
    const gotonextpage = async () => {
        // try{
        //     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.props.apiKey}&page=${this.state.page -1}`)
        //     let parsed_data = await data.json()
        //     this.setState({
        //         articles:parsed_data.articles

        //     })
        // }
        // catch (error){
        //     console.log("ERRROR IS",error)
        // }
        // this.setState({
        //     page: this.state.page + 1
        // });
        setPage(page+1)
        this.updateNews();
    }

    const formattedDate = (element) => {
        const originalDate = new Date(element);
        const formattedDate = originalDate.toDateString(); // You can format it as per your requirement
        return formattedDate;
    }


        // const { articles } = this.state;
        // const { category } = this.props
        return (
            <div className='container my-5'>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<p>LOAD HO RAHA HAI</p>}
                >
                {/* <button onClick={this.gotoprevpage} type="button" className="btn btn-primary">Previous</button>
            <button onClick={this.gotonextpage} type="button" className="btn btn-primary custom-next">Next</button> */}
                <div className='row'>
                    {articles.length > 0 ? (
                        articles.map((element) => (
                            <div className='col md-4 my-3' key={element.url}>
                                <NewsItem title={element.title} description={element.description} url={element.url} imageUrl={element.urlToImage} publishedDate={formattedDate(element.publishedAt)} authorName={element.author} category={props.category} />
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )
                    }
                </div>
                </InfiniteScroll>
            </div>
        )
}

News.propTypes = {
    category:PropTypes.string
}

News.defaultProps = {
    category:"science"
}

export default News;