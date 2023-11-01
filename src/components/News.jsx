import React, { Component } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        category:"science"
    }
    static propTypes = {
        category:PropTypes.string,
    }


    constructor (props){
        super(props);
        this.state = {
            page:1,
            articles:[]
        }
    }

    updateNews = async () =>{
        try{
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce925a4554cb4328805b38890d26b6df&page=${this.state.page}&category=${this.props.category}`)
            let parsed_data = await data.json()
            this.setState({
                articles:parsed_data.articles
            })
        }
        catch (error){
            console.log("ERRROR IS",error)
        }
    }

    async componentDidMount(){
        try{
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce925a4554cb4328805b38890d26b6df&page=1&category=${this.props.category}`)
            let parsed_data = await data.json()
            this.setState({
                articles:parsed_data.articles
            })
        }
        catch (error){
            console.log("ERRROR IS",error)
        }
    }

    gotoprevpage = async () =>{
        // try{
        //     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce925a4554cb4328805b38890d26b6df&page=${this.state.page -1}`)
        //     let parsed_data = await data.json()
        //     this.setState({
        //         articles:parsed_data.articles
                
        //     })
        // }
        // catch (error){
        //     console.log("ERRROR IS",error)
        // }
        this.setState({
            page:this.state.page - 1 
        });
        this.updateNews();
    }
    gotonextpage = async () =>{
        // try{
        //     let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce925a4554cb4328805b38890d26b6df&page=${this.state.page -1}`)
        //     let parsed_data = await data.json()
        //     this.setState({
        //         articles:parsed_data.articles
                
        //     })
        // }
        // catch (error){
        //     console.log("ERRROR IS",error)
        // }
        this.setState({
            page:this.state.page + 1 
        });
        this.updateNews();
    }

    formattedDate = (element) => {
        const originalDate = new Date(element);
        const formattedDate = originalDate.toDateString(); // You can format it as per your requirement
        return formattedDate;
    }


    render() {
        const {articles} = this.state;
        const {category} = this.props
        return (
        <div className='container my-5'>
            <button onClick={this.gotoprevpage} type="button" className="btn btn-primary">Previous</button>
            <button onClick={this.gotonextpage} type="button" className="btn btn-primary custom-next">Next</button>
            <div className='row'>
                {articles.length> 0 ?(
                    articles.map((element)=>(
                        <div className='col md-4 my-3' key={element.url}>
                        <NewsItem title = {element.title} description = {element.description} url={element.url} imageUrl = {element.urlToImage} publishedDate = {this.formattedDate(element.publishedAt)} authorName= {element.author} category={category}/>
                    </div>
                    ))
                    ):(
                        <p>Loading...</p>
                    )
                }
            </div>
        </div>
        )
    }
}
