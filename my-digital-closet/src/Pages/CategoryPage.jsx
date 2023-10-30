import CategoryCard from "../Components/CategoryCard"
import { Link } from "react-router-dom"; 

import React, { useEffect, useState } from "react";
import Add from '@mui/icons-material/AddCircleOutlineOutlined';

//ClosetPge should take in all the categories a user wants
export default function ClosetPage(){

    const [articleCategories, setCategories] = useState([]);

    const categories = ["Tops", "Bottoms", "Shoes", "Jackets", "Accessories"];
console.log("Category");

    return(
        <section className="closet">
            

            <div id="closet-body">
                <h1>Your Closet</h1>
                <div id="closet-container">
                    <div className="category-card-container">
                        {/* map through the category a user decides they want */}
                        {categories.map((category, index) => (
                            //take in the name of the categories

                            <Link className="linked-items" to={`/closet/${category}`}><CategoryCard category = {category}/></Link>
                            // <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>

                </div>
                <Add />
            </div>
        </section>

    )

}