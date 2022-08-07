import React from 'react';
import {Container} from 'react-bootstrap';
import { QUERY_ME } from "../utils/queries";

//import matchlogic from "../components/App/matchlogic";


const Match = ({QUERY_ME}) => {
    const query = {QUERY_ME} 
    return (
        <userTopFiveCompare>
            <div className="card" style= {{width: "18rem"}} >
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title"> You Matched 73% </h5>
                    <p className="card-text">You Matched most with ${QUERY_ME.movies.length}</p>
                    <a href="#" className="btn btn-primary">Save answers</a>
                </div>
            </div>
        </userTopFiveCompare>
    );

};


export default Match;