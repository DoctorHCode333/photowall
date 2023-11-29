import React, { useEffect} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto'
import {Routes, Route, Link} from 'react-router-dom';
import {removePost} from  '../redux/actions';
import { useNavigate } from 'react-router-dom';
import Single from './Single.js';
//import { useSelector,from useDispatch } from 'react-redux';


const Main = (props) => {
    
    const navigate = useNavigate();
    //  useEffect(() => {
    //     props.removePost(0);
    //  },[props]);

    console.log("Hello",props)
        return (
            <div>
                <h1>
                    <Link to="/">Photowall</Link>
                </h1>
                <Routes>
                    <Route exact path="/" 
                        element={
                            <div>
                                <Photowall {...props} />
                            </div>
                        } 
                    />
                     < Route path="/AddPhoto" 
                        element={
                            <AddPhoto {...props} navigate={navigate}/>
                        }
                    /> 

                     < Route path="/single/:id" 
                        element={
                            <Single {...props}/>
                        }
                    /> 
                </Routes>
            </div>
        );
}

export default Main;