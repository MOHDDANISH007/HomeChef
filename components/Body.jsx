import React from 'react'
import rectange7 from "./categories 1.svg"
import rectange8 from "./checkbox 1.svg"
import section from "./Section.module.css"


const Body = () => {
    return (
        <section>
            <div id="section_container" className={section.section_container}>

                <div id="section_container1" className={section.section_container1_category}>
                    <img src={rectange7} alt=" " />
                    <p>Explore categories</p>
                </div>


                <div id="section_container2" className={section.section_container2_category}>
                    <img src={rectange8} alt=" " />
                    <p>Search by ingredients</p>
                </div>
            </div>

        </section>
    )
}

export default Body
