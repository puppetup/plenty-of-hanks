import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { getMovies } from "../utils/mutations";
import { saveBookIds, getSavedBookIds } from "../utils/localStorage";

import Auth from "../utils/auth";

const TopFiveOrder = () => {
  // create state for holding returned google api data
  const [searchedBooks, setSearchedBooks] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  // create state to hold saved bookId values
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

  const [saveBook, { error }] = useMutation(SAVE_BOOK);

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveBookIds(savedBookIds);
  });

  // create method to search for books and set state on form submit
  

  // create function to handle saving a book to our database
  
  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <div data-mdb-sortable="sortable" class="sortable-list">
            <div class="sortable-item">Item 1</div>
            <div class="sortable-item">Item 2</div>
            <div class="sortable-item">Item 3</div>
            <div class="sortable-item">Item 4</div>
            <div class="sortable-item">Item 5</div>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
};

export default TopFiveOrder;
