import React from 'react'
import './portfolio.css'

const portfolio = () => {
  return (
    <>
    <div><h1 id='port'>Projects</h1></div>
    <section id='portfolio'className='portfolio'>
      
      <div className="project project1">
        <h2>project 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit architecto incidunt nesciunt fugiat corrupti est ipsa! Provident iure animi magnam maiores possimus dolorem perspiciatis sit laborum, hic dignissimos. Voluptatibus, omnis.</p>
       <button> <a href="">project 1</a></button>
      </div>
      <div className="project project2">
        <h2>project2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, odio ullam quam blanditiis quos et obcaecati dicta, nobis modi possimus officia iure error nam inventore ipsa voluptatum similique incidunt fugiat.</p>
        <button><a href="https://github.com" >project 2</a></button>
      </div>

    </section>
    </>
  )
}

export default portfolio