import React, { useEffect} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto'
import {Routes, Route} from 'react-router-dom';
import {removePost} from  '../redux/actions';
import { useNavigate } from 'react-router-dom';
//import { useSelector,from useDispatch } from 'react-redux';

const Main = (props) => {
    
    const navigate = useNavigate();
    //  useEffect(() => {
    //     props.removePost(0);
    //  },[props]);

    console.log("Hello",props)
        return (
            
            <div>
                <Routes>
                    <Route exact path="/" 
                        element={
                            <div>
                                <Title title="Photo-Wall" />
                                <Photowall {...props} />
                            </div>
                        } 
                    />
                     < Route path="/AddPhoto" 
                        element={
                            <AddPhoto {...props} navigate={navigate}/>
                        }
                    /> 
                </Routes>
            </div>
        );
}

export default Main;