import React from 'react';
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { getMovies } from '../utils/queries';
import { SAVE_MOVIE } from '../utils/mutations';



import Auth from '../utils/auth';

const userSelections = [];

const SelectMovies = () => {
  const { loading, data } = useQuery(getMovies);
  const [saveMovie, { error }] = useMutation(SAVE_MOVIE);

  
  const movieData = data?.movies || [];

  // event handling function that accepts the movie's mongo _id value as param and adds to user selection array
  const handleSelectMovie = async (e) => {
    const movie_id = e.target?.id
    userSelections.push(movie_id)
    console.log(userSelections, e,movie_id)
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveMovie({
        variables: { movie_id },
      });

      // upon success, remove book's id from localStorage
      // removeBookId(movieId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
    <Container>
        {/* ALL TOM HANKS MOVIES */}
        <CardColumns>
          {console.log('hi2', movieData)}
          {movieData?.map((movie) => { 
            return (
              <Card key={movie.movieName} border="dark">
                {movie.imageLink ? (
                  <Card.Img
                    src={`${movie.imageLink}`}
                  
                    alt={`The cover for ${movie.movieName}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{movie.movieName}</Card.Title>
                  <p className="small">Released: {movie.yearReleased}</p>
                  <Button
                    className="btn-block btn-dark"
                    id={`${movie.movieName}`}
                    onClick={(e) => handleSelectMovie(e)}
                  >
                    Select this movie!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SelectMovies;
