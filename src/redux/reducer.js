import posts from '../data/posts'

const postReducer = function postsUpdate(state = posts, action){
    console.log(action.index)
    switch (action.type){
        case 'REMOVE_POST': return [...state].filter(post => post.id !==action.index)

        case 'ADD_POST': return [...state, action.post]

        default: return state
    }
}


export default postReducer