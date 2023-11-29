import React from "react";
import {useParams} from "react-router-dom";
import Photo from './Photo'
import Comments from "./Comments";


const Single = (props) => {
    const id = Number(useParams().id)
    const post = props.posts.find((post) => post.id === id)
    return  <figure>
                <div className="single-photo">
                    <Photo post={post}/>
                    <Comments addComment={props.addComment} comments={props.comments}/>
                </div>
            </figure>    
}
export default Single