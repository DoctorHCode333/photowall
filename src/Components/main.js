import React, { Component } from 'react';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [{
                id: "0",
                description: "Beautiful Landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                    "3919321_1443393332_n.jpg"
            }, {
                id: "1",
                description: "Aliens???",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
            }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }],
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postsRemoved) {
        console.log(postsRemoved.description);
        this.setState((state) => ({
            posts: this.state.posts.filter(post => post !== postsRemoved)
        }))
    }

    addPhoto(postSubbmitted) {
        this.setState({
            posts: this.state.posts.concat(postSubbmitted)
        }, () => {
            this.props.navigate('/');
        });
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <div>
                            <Title title="Photo-Wall" />
                            <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
                        </div>
                    } />
                    < Route path="/AddPhoto" element={
                        <AddPhoto onAddPhoto={(addedPhoto) => {
                            this.addPhoto(addedPhoto);
                        }} />
                    } />
                </Routes>
            </Router>
        );
    }
}

export function APPWithRouter() {
    const navigate = useNavigate();
    return (<Main navigate={navigate}/>)
}

export default Main