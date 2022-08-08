import React from 'react';
import {Container} from 'react-bootstrap';
import { getMovies } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

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