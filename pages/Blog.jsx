import React from 'react'
import Navbar from '../components/Navbar'

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();

    return {
        props: {
            data,
        }
    }
}

const Blog = ({ data }) => {
    return (
        <div>
            <Navbar />
            <h1>Blog</h1>
            {
                data.slice(0, 5).map((post) => (
                    <div key={post.id}>
                        <h3>{post.id}</h3>
                        <h2>{post.title}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Blog