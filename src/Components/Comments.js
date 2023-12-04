import React from "react";


const Comments = (props)=>{
    const handleSubmit = (event)=>{
        event.preventDefault();
        const comment = event.target.elements.comment.value
        props.addComment(comment,props.id)
        event.target.elements.comment.value = "";
    }
    return  <div className="comment">
                <div>
                    {
                        props.comments.map((comment,index) => {
                            return <p key={index}> {comment} </p>
                        })
                    }
                </div>
                <div>
                    <form className="comment-form" onSubmit={handleSubmit}>
                                <input type='text' placeholder="comment" name="comment"/>
                                <input type='submit' hidden/>
                    </form>
                </div>
                
            </div>
}

export default Comments