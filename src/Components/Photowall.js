import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photowall(props){
    const tempPost = [...props.posts];
        return <div>
            <Link className='buttonClass'  to="/AddPhoto">Click Me</Link>
            <div className="photo-grid">
                {tempPost
                .sort(function(x, y){
                    return y.id - x.id
                })
                .map((post, index) => <Photo key={post.id} post={post} {...props} index={post.id}/>)}
            </div>
        </div>
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Photowall
