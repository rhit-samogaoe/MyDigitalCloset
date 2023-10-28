import React from 'react';
import { useState, useEffect } from 'react';

export default function ProjectCard({ category, index }) {

    const [categoryData, setCategoryData] = useState(); 

    return (

        <div className="category-card" >

            <div >

                <h3 className="project-section-title">{category.name}</h3>

            </div>

        </div>

    );

}
