import React from 'react';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto'
import {Routes, Route, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Single from './Single.js';
//import { useSelector,from useDispatch } from 'react-redux';


const Main = (props) => {
    
    const navigate = useNavigate();
   
        return (
            <div>
                <h1>
                    <Link to="">Photowall</Link>     
                </h1>
                <Routes>
                    <Route exact path="" 
                        element={
                            <div>
                                <Photowall {...props} navigate={navigate}/>
                            </div>
                        } 
                    />
                     < Route path="AddPhoto" 
                        element={
                            <AddPhoto {...props} navigate={navigate}/>
                        }
                    /> 

                     < Route path="single/:id" 
                        element={
                            <Single {...props} navigate={navigate}/>
                        }
                    /> 
                </Routes>
            </div>
        );
}

export default Main;