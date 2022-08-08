import React from 'react';
import {Container} from 'react-bootstrap';
// import { getMovies } from "../utils/mutations";
//import { QUERY_ME } from "../utils/queries";




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
