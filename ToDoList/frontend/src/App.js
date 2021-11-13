import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/User.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer";
import axios from "axios";


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'navC': [],
            'footC': []

        }
    }

    componentDidMount() {
        // const users = [
        //     {
        //         'username': 'username1',
        //         'first_name': 'Фёдор',
        //         'last_name': 'Достоевский',
        //         'email': 1821
        //     },
        //     {
        //         'username': 'username1',
        //         'first_name': 'Александр',
        //         'last_name': 'Грин',
        //         'email': 1880
        //     },
        // ]
        // const navC = []
        // const footC = []


        axios.get('http://127.0.0.1:8000/api/users/')
            .then(
            response => {
                const users = response.data;
                const navC = [];
                const footC = [];

                this.setState(
                    {
                        'users': users,
                        'navC': navC,
                        'footC': footC
                    }
                )
            }).catch(e => {console.log(e)})
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Nav navC={this.state.navC}/>
                    <UserList users={this.state.users}/>
                </div>
                <Footer className="footerH" navC={this.state.footC}/>
            </div>
        )
    }
}


export default App;
