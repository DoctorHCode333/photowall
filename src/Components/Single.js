import React from "react";
import {useParams} from "react-router-dom";
import Photo from './Photo'
import Comments from "./Comments";


const Single = (props) => {
    const id = Number(useParams().id)  
    const post = props.posts.find((post) => post.id === id)
    const comments = props.comments[id] || []
    const index = props.posts.findIndex((post) => post.id===id)
return <div className="comment_container">
    <div className="single-photo">
                <Photo post={post} {...props} index={index}/>
                <Comments addComment={props.addComment} comments={comments} id={id}/>
            </div> 
</div> 
}
export default Single