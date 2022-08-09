import React from 'react';
import {Container} from 'react-bootstrap';
<<<<<<< HEAD
// import { getMovies } from "../utils/mutations";
//import { QUERY_ME } from "../utils/queries";

=======
import { QUERY_ME } from "../utils/queries";
import Matchlogic from "../components/App/matchlogic";
const Match = ({QUERY_ME}) => {
    const query = {QUERY_ME} 
    return (
        <Container>
            <div className="card" style= {{width: "18rem"}} >
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title"> You Matched 73% </h5>
                    <p className="card-text">You Matched most with  </p> <Matchlogic/>
                    <a href="#" className="btn btn-primary">Save answers</a>
                </div>
            </div>
        </Container>
    );
>>>>>>> dr-develop



const Match = ({ QUERY_ME }) => {
  const query = { QUERY_ME };
  return (
    <Container>
      <div className="match-container">
        <div className="card" style={{ width: "22rem" }}>
          <img
            id="headshot"
            className="card-img-top"
            style={{ width: "22rem" }}
            src="https://res.cloudinary.com/plentyofhanks/image/upload/v1659986005/tom_hanks_headshot_vxzapx.jpg"
            alt="tom hanks"
          />
          <div className="card-body">
            <h5 className="card-title"> You Matched 73% with Savino</h5>
            <p className="card-text">You Matched ❤️</p>
            <a href="#" className="btn btn-primary">
              Save answers
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "22rem" }}>
          <img
            id="headshot"
            className="card-img-top"
            style={{ width: "22rem" }}
            src="https://res.cloudinary.com/plentyofhanks/image/upload/v1659986005/tom_hanks_headshot_vxzapx.jpg"
            alt="tom hanks"
          />
          <div className="card-body">
            <h5 className="card-title"> You Matched 33% with Marvin</h5>
            <p className="card-text">You Matched ❤️</p>
            <a href="#" className="btn btn-primary">
              Save answers
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "22rem" }}>
          <img
            id="headshot"
            className="card-img-top"
            style={{ width: "22rem" }}
            src="https://res.cloudinary.com/plentyofhanks/image/upload/v1659986005/tom_hanks_headshot_vxzapx.jpg"
            alt="tom hanks"
          />
          <div className="card-body">
            <h5 className="card-title"> You Matched 93% with Jordan</h5>
            <p className="card-text">You Matched ❤️</p>
            <a href="#" className="btn btn-primary">
              Save answers
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "22rem" }}>
          <img
            id="headshot"
            className="card-img-top"
            style={{ width: "22rem" }}
            src="https://res.cloudinary.com/plentyofhanks/image/upload/v1659986005/tom_hanks_headshot_vxzapx.jpg"
            alt="tom hanks"
          />
          <div className="card-body">
            <h5 className="card-title"> You Matched 103% with Jon</h5>
            <p className="card-text">You Matched ❤️</p>
            <a href="#" className="btn btn-primary">
              Save answers
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "22rem" }}>
          <img
            id="headshot"
            className="card-img-top"
            style={{ width: "22rem" }}
            src="https://res.cloudinary.com/plentyofhanks/image/upload/v1659986005/tom_hanks_headshot_vxzapx.jpg"
            alt="tom hanks"
          />
          <div className="card-body">
            <h5 className="card-title"> You Matched 0% with David</h5>
            <p className="card-text">You Matched ❤️</p>
            <a href="#" className="btn btn-primary">
              Save answers
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Match;
