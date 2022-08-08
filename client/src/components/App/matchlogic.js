import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { QUERY_ME } from "../../utils/queries";
//get use query

// const localStorageArr = window.localStorage.getItem('hi2');
// console.log(localStorageArr);
//console.log(`Hi ${localStorageArr} is in localStorage.`);
//temporary variables, to be replaced with array from topfive page
//TODO: replace with previous page data from selection page
const userTopFive_1 = [0, 1, 2, 3, 4];
const userTopFive_2 = [0, 1, 2, 3, 4];
const userTopFive_3 = [0, 1, 2, 3, 4];
const userTopFive_4 = [0, 1, 2, 3, 4];
const userTopFive_5 = [0, 1, 2, 3, 4];

// This array will hold values from previous page of user top five.
const CurrentLoggedinUser = [...userTopFive_1];

const databaseTopFive_1 = [7, 1, 3, 2, 0];
const databaseTopFive_2 = [0, 1, 2, 3, 4];
const databaseTopFive_3 = [0, 1, 2, 3, 4];
const databaseTopFive_4 = [0, 1, 2, 3, 4];
const databaseTopFive_5 = [0, 1, 2, 3, 4];

// This array will hold values from previous page of database top five.
const databaseLoggedindatabase = [
  ...databaseTopFive_1,
  //   databaseTopFive_2,
  //   databaseTopFive_3,
  //   databaseTopFive_4,
  //   databaseTopFive_5,
];

// Variable that Queries the database for top five arrays
//Const allUser = { movies: []}
console.log("hello");

const userTopFiveCompare = () => {
  console.log(CurrentLoggedinUser);
  console.log(databaseLoggedindatabase);
  
  const handleSelectMovie = async (e) => {
    const movieId = e.target?.id
    userSelections.push(movieId)
    console.log(userSelections, e,movieId)
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
  //   if (CurrentLoggedinUser.length !== databaseLoggedindatabase.length) {
  //     console.log("checked length");
  //     return false;
  //   }
  CurrentLoggedinUser.sort();
  databaseLoggedindatabase.sort();
  let foundMatches = 0;

  for (let i = 0; i < CurrentLoggedinUser.length; i++) {
    if (CurrentLoggedinUser[i] === databaseLoggedindatabase[i]) {
      foundMatches++;
    }
  }
  console.log(foundMatches / 5);
  return true;

};

  

//console.log(CurrentLoggedinUser)
//      //for (var j = 0; j <5; j++) {
// //
// //       //console.log(userTopFiveCompare);
// //       else {
// //         console.log("doesnt work");
// //       }
// //     }
//    //}

// --PSUEDOCODE--
// Query for all Users useQuery
// Const allUser = data from above query
// CurrentLoggedinUser = [moviesArr]
// [[user1movies], [user2movies], [user3movies]]
// useState
// useEffect
// Function compare(incomingUserArr) {
// for(let I =0; I < arr.length; I++ {

userTopFiveCompare();
