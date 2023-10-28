import Header from "./Header" 
import Footer from "./Footer"
import CategoryCard from "../Components/CategoryCard"

import React, { useEffect, useState } from "react";

//ClosetPge should take in all the categories a user wants
export default function ClosetPage(){

    const [articleCategories, setCategories] = useState([]);


    return(
        <section className="closet">
            <Header />
            
            <div id="closet-header">

            </div>

            <div id="closet-body">
                <div id="closet-container">
                    <div>
                        {/* map through the category a user decides they want */}
                        {articleCategories.map((article, index) => (
                            //take in the name of the categories
                            <CategoryCard />
                            // <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>

                </div>


            </div>

            <Footer />
        </section>

    )

}