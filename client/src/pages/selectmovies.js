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
<<<<<<< HEAD
// import { REMOVE_BOOK } from '../utils/mutations';
// import { removeBookId } from '../utils/localStorage';
=======
import { SAVE_MOVIE } from '../utils/mutations';
import { removeBookId } from '../utils/localStorage';
>>>>>>> main

import Auth from '../utils/auth';

const SelectMovies = () => {
  const { loading, data } = useQuery(getMovies);
  const [saveMovie, { error }] = useMutation(SAVE_MOVIE);

  
  const movieData = data?.movies || [];
  console.log('Hello', data, movieData)

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleSelectMovie = async (movieId) => {
    const userSelections = [];
    userSelections.push(movieId)
    
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveMovie({
        variables: { movieId },
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
                    src={`../../server/images/${movie.imageLink}`}
                  
                    alt={`The cover for ${movie.movieName}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{movie.movieName}</Card.Title>
                  <p className="small">Authors: {movie.authors}</p>
                  <Card.Text>{movie.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleSelectMovie(movie.movieId)}
                  >
                    Delete this movie!
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
