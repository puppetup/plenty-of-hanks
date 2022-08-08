import React from 'react';
import {Container} from 'react-bootstrap';
import { QUERY_ME } from "../utils/queries";
import { useQuery } from '@apollo/client';
import {userTopFiveCompare} from '../utils/userTopFiveCompare';
const Match = () => {
    const {loading, data} = useQuery (QUERY_ME);
    const movies = data?.movies || [];
    console.log(movies) 
    console.log(data) 
    return (
        <Container>
            <div className="card" style= {{width: "18rem"}} >
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title"> You Matched 73% </h5>
                    <p className="card-text">You Matched most with ${userTopFiveCompare}</p>
                    <a href="#" className="btn btn-primary">Save answers</a>
                </div>
            </div>
        </Container>
    );

};


export default Match;