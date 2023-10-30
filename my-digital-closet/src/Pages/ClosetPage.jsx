import ArticleCard from "../Components/ArticleCard"
import { Link, useParams } from "react-router-dom"; 
import Add from '@mui/icons-material/AddCircleOutlineOutlined';
import Remove from '@mui/icons-material/RemoveCircleOutlineOutlined';

import React, { useEffect, useState } from "react";


//ClosetPge should take in all the categories a user wants
export default function ClosetPage(){

    const {category } = useParams();
    const [articleCategories, setCategories] = useState([]);


    return(
        <section className="closet">

            <div id="closet-body">
                <h1>{category}</h1>
                <div id="closet-container">
                    <div>
                        {/* map through the category a user decides they want */}
                        {articleCategories.map((article, index) => (
                            //take in the name of the categories
                            <ArticleCard />
                            // <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>

                </div>

                <Add />
            </div>
        </section>

    )

}