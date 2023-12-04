import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function Photo(props){
        const post = props.post;

        return  <figure className="figure">
                    <Link to={`/single/${post.id}`}>
                        <img className="photo" src={post.imageLink} alt={post.description}/>
                    </Link>
            
                    <div className="button-container">
                        <figcaption><p>{post.description}</p></figcaption>
                        <div>
                        <Link className="comment-button" to={`/single/${post.id}`}>
                            <div>
                                {props.comments[post.id] ? props.comments[post.id].length : 0}
                            </div>
                            <div className="comment-chat">
                                <img src="https://static.thenounproject.com/png/638755-200.png" alt="" />
                            </div>
                        </Link>
                        <button className="remove-button" onClick = {()=> {
                                props.removePost(props.index);
                                setTimeout(() => {
                                    
                                  }, 1000);
                                  props.navigate('/')
                            }}> 
                            ☠️
                        </button>
                        </div>
                       
                    </div>
                </figure>
        
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
}
export default Photo