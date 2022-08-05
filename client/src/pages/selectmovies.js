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
// import { REMOVE_BOOK } from '../utils/mutations';
// import { removeBookId } from '../utils/localStorage';

import Auth from '../utils/auth';

const SelectMovies = () => {
  const { loading, data } = useQuery(getMovies);
  const [removeBook, { error }] = useMutation(REMOVE_BOOK);

  const userData = data?.me || {};
  const movieData = data?.movies || {};
  console.log('Hello', data, movieData)

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteMovie = async (bookId) => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeBook({
        variables: { bookId },
      });

      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className=" ">
        <Container>
          <h1>Viewing {userData.username}'s books!</h1>
        </Container>
      </Jumbotron>
      <Container className="" >
        <h2>
          {userData.savedBooks?.length
            ? `Viewing ${userData.savedBooks.length} saved ${
                userData.savedBooks.length === 1 ? 'book' : 'books'
              }:`
            : 'Select five Tom Hanks Movies!'}
        </h2>
        <CardColumns>
          {userData.savedBooks?.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteMovie(book.bookId)}
                  >
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
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
                    onClick={() => handleDeleteMovie(movie.movieId)}
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
