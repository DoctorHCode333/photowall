import React from "react";
import PropTypes from 'prop-types'

function Photo(props){
        const post = props.post;
        return <figure className="figure">
                <img className="photo" src={post.imageLink} alt={post.description}/>
        
                <div className="button-container">
                    <figcaption><p>{post.description}</p></figcaption>
                    <button className="remove-button" onClick = {()=> {
                            props.removePost(props.index);
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