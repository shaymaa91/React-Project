import React, { Component } from 'react';
import axios from 'axios';
import style from './News.module.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default class News extends Component {
    state = {
        Articles: []
    }
    getNews = async () => {
        let { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey=c9e65383afd24832af7e15ccb1f44932');
        console.log("News hey!");
        console.log(data);
        this.setState({ Articles: data.articles });

    }
    componentDidMount() {
        this.getNews();
    }

    render() {
        return (
            <>
                <h1 className='text-center bg-secondary '>All News</h1>

                    <div className="row">
                        {(this.state.Articles.length) ? (this.state.Articles.map((article, index) =>
                            <div className="col-md-3 " key={index}>
                                <div className={`${style.card} card mb-3`} >
                                    <div className="row g-0" >
                                        <div className="col-md-4">
                                            <img src={article.urlToImage} className={`${style.imgHight} img-fluid rounded-start`} alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body overflow-hidden">
                                                <h5 className="card-title">{article.title}</h5>
                                                {/* <div><p className="card-text ">{article.description}</p></div> */}
                                                <p className="card-text"><small className="text-muted">{article.author}</small></p>
                                                <p className="card-text"><small className="text-muted">{article.publishedAt}</small></p>
                                                <a to={article.url}>الرابط</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className='d-flex justify-content-center align-items-center vh-100 fs-1'>
                                <h2><i className='fas fa-spinner fa-spin text-xl-start fs-1'></i></h2>
                                
                            </div>)}
                    </div>


                </>
                )
    }
}
