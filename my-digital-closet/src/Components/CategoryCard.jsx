import React from 'react';
import { useState, useEffect } from 'react';

export default function ProjectCard({category}) {

    const [categoryData, setCategoryData] = useState(); 

    return (

        <div className="category-card" >

            <div className="category-card-content">

                <h3 className="project-section-title">{category}</h3>

            </div>

        </div>

    );

}
