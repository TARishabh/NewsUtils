import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import NewsItem from './components/NewsItem'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route exact path = '#' element = {<News key="general" category={"general"}/>}/>
            <Route exact path = '/about' element = {<News key="general"category={"general"}/>}/>
            <Route exact path = '/home' element = {<News key="general"category={"general"}/>}/>
            <Route exact path = '/sports' element = {<News key="sports"category={"sports"}/>}/>
            <Route exact path = '/business' element = {<News key="business" category={"business"}/>}/>
            <Route exact path = '/science' element = {<News key="science" category={"science"}/>}/>
          </Routes>
          
        </div>
      </Router>
    )
  }
}


// import React, { Component } from 'react'
// import NewsItem from './NewsItem';

// export default class News extends Component {
//     constructor(props){
//         super(props);
//         console.log("constructor hoon BC")
//         this.state = {
//             articles:[],
//             page:1
//         }
//     }

//     gotonextpage = async () =>{
//         try{
//             let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce925a4554cb4328805b38890d26b6df&page=${this.state.page + 1}`);
//             let parsed_data = await data.json();
//             this.setState({
//                 page:this.state.page + 1,
//                 articles: parsed_data.articles,
//             });
//         }
//         catch (error){
//             console.log(error)
//         }
//     }

//     gotoprevpage = async () =>{
//         try{
//             let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce925a4554cb4328805b38890d26b6df&page=${this.state.page - 1}`);
//             let parsed_data = await data.json();
//             this.setState({
//                 articles: parsed_data.articles,
//                 page:this.state.page - 1
//             });
//         }
//         catch (error){
//             console.log(error)
//         }
//     }

//     async componentDidMount() {
//         try {
//             let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ce925a4554cb4328805b38890d26b6df&page=1`);
//             let parsed_data = await data.json();
//             this.setState({
//                 articles: parsed_data.articles,
//             });
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }
//     render() {
//         const { articles } = this.state;
//         return (
//             <div className='container my-5'>
//                     <button  type="button" className="btn btn-primary custom-previous">Previous</button>
//                     <button onClick={this.gotonextpage} type="button" className="btn btn-primary custom-next">Next</button>
//                 <div className="row">
//                     {articles.length > 0 ? (
//                         articles.map((element) => (
//                             <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} />
//                             </div>
//                         ))
//                     ) : (
//                         <p>Loading...</p>
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }
