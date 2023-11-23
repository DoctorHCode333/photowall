import React,{Component} from 'react';

class AddPhoto extends Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: "0",
            description: description,
            imageLink: imageLink
        }
        if(description && imageLink){
            this.props.onAddPhoto(post)
        }
    }
    
    render(){
        return <div>
            <h1>Photo-Wall</h1>
            <div className='form'>c
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Link' name='link'/>
                    <input type="text"  placeholder='Description' name='description'/>
                    <button className='postButton'>Post</button>
                </form>
            </div>
        </div>
    }
}

export default AddPhoto;