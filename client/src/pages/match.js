import React from 'react';
<<<<<<< HEAD
import {
    Container
} from 'react-bootstrap';
=======
import {Container} from 'react-bootstrap';
import { getMovies } from "../utils/mutations";
>>>>>>> ea69054103fb8492bb8459bfbc2ce9c0f9fdb62e

const Match = () => {

    return (
        <Container>
            <div className="card" style= {{width: "18rem"}} >
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </Container>
    );

};


export default Match;