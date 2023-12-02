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
                        <button className="remove-button" onClick = {()=> {
                                props.removePost(props.index);
                                props.navigate('/')
                            }}> 
                            ☠️
                        </button>
                    </div>
                </figure>
        
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
}
export default Photo