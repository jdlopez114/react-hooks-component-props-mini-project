import React from "react";
import Article from "./Article"


function ArticleList({posts}) {

    const postArr = posts.map((post) => {
        return(
            <Article 
            key={post.id} 
            preview= {post.preview} 
            date= {post.date} 
            title= {post.title}/>
            )
    })
console.log(postArr)

    return (
        <main>
            {postArr}
        </main>
    )
}

export default ArticleList