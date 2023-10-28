import React from 'react';
import { useState, useEffect } from 'react';

export default function ArticleCard({ article, category }) {

    const [projectData, setProjectData] = useState(); 

    return (

        <div className="article-card" >

            <div >

                <h3 className="">{category.name}</h3>

                <span >Image: {article.image}</span>
                <span >Name: {article.name}</span>
                <span>Category: {category}</span>
                <span>Size:{article.size} </span>
                <span>Brand: {article.brand}</span>
                <span>Last Worn: {article.lastWorn}</span>

            </div>

        </div>

    );

}
