import React from 'react';
<<<<<<< HEAD
import {
    Container
} from 'react-bootstrap';
=======
import {Container} from 'react-bootstrap';
<<<<<<< HEAD
import { getMovies } from "../utils/mutations";
>>>>>>> ea69054103fb8492bb8459bfbc2ce9c0f9fdb62e

const Match = () => {
=======
import { QUERY_ME } from "../utils/queries";
>>>>>>> db473f54c88b61c9564d6e946aef3614727637af

const Match = ({QUERY_ME}) => {
    const query = {QUERY_ME} 
    return (
        <Container>
            <div className="card" style= {{width: "18rem"}} >
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title"> You Matched 73% </h5>
                    <p className="card-text">You Matched most with _____</p>
                    <a href="#" className="btn btn-primary">Save answers</a>
                </div>
            </div>
        </Container>
    );

};


export default Match;