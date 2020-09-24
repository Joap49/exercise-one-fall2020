import React from 'react';

import { useParams } from "react-router-dom";

import Data from '../components/data';

import { days, months } from "../components/dateValue";

function Article(){
    let { id } = useParams();
    
    const articleData = Data.find((article) => article.id === id);

    if(!articleData) return null;

    const date = new Date(articleData.publishedDate);
    const dayOfWeek = date.getDay();
    const calendarDate = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();


    console.log("articleData", articleData);
    
    return(
        <section className="Article">
            <header 
                className="ArticleHeaderWrapper"  
                style={{ backgroundImage: `url('${articleData.image.url}')` }} 
            >
                <div className="ArticleHeader">
                    <h1>{articleData.title}</h1>
                    <p>{`${days[dayOfWeek]}, ${months[month]}, ${calendarDate}, ${year}`}</p>
                    <p className="ArticleHeaderBlurb">{articleData.blurb}</p>
                </div>
            </header>

            <article className="ArticleBody">
                {articleData.articleText.map((article, i) => {
                    switch (article.type) {
                        case "p":
                            return <p key={i}>{article.data}</p>;
                        case "h2":
                            return <h2 key={i}>{article.data}</h2>
                        case "h3":
                            return <h3 key={i}>{article.data}</h3>
                        default:
                            return null;
                    }                         
                })}
            </article>
        </section>
    );
}

export default Article;  