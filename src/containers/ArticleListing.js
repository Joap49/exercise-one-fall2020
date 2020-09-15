import React from 'react';
// Component Imports
import ArticleCard from'../components/ArticleCard';

function ArticleListing(){
    return (
        <section>
            <header>
                <h1>Articles</h1>
                <ArticleCard />
            </header>
        </section>
    );
}

export default ArticleListing;