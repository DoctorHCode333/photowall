import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types';


class Photowall extends Component {
    render() {
        return <div>
             <a className='buttonClass' onClick={this.props.onNavigate} href="#AddPhoto">Click Me</a>
            <div className="photo-grid">
                {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto} />)}
            </div>
        </div>

    }
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.object.isRequired
}

export default Photowall
