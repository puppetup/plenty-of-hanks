//import React from 'react';
//import React, { useState, useEffect } from 'react';
import { QUERY_ME } from "../../utils/queries";
import { SelectMovies } from "../../pages/selectmovies"
//import { Link } from 'react-router-dom';
//get use query
// const localStorageArr = window.localStorage.getItem('hi2');
// console.log(localStorageArr);
//console.log(`Hi ${localStorageArr} is in localStorage.`);
//temporary variables, to be replaced with array from topfive page

// do use query to get the arrays from the database






//TODO: replace with previous page data from selection page
const userTopFive_1 = [0, 1, 2, 3, 4, 9];
const userTopFive_2 = [0, 1, 2, 3, 4];
const userTopFive_3 = [0, 1, 2, 3, 4];
const userTopFive_4 = [0, 1, 2, 3, 4];
const userTopFive_5 = [0, 1, 2, 3, 4];

// This array will hold values from previous page of user top five.
const CurrentLoggedinUser = [...userTopFive_1];

const databaseTopFive_1 = [7, 1, 3, 2, 0];

// This array will hold values from previous page of database top five.
const databaseLoggedindatabase = [
  ...databaseTopFive_1,
  //   databaseTopFive_2,
  //   databaseTopFive_3,
  //   databaseTopFive_4,
  //   databaseTopFive_5,
];




// This is the function to get data from the user in the section page
const getUserInfo = () => {
  console.log(SelectMovies.getUserInfo);
}



// Variable that Queries the database for top five arrays
//Const allUser = { movies: []}
// const getDatabaseInfo = () => {
//   const { loading, data } = useQuery(QUERY_ME);

//   console.log(loading, data);

// };

const userTopFiveCompare = () => {
  console.log(CurrentLoggedinUser);
  console.log(databaseLoggedindatabase);
  
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
getUserInfo()
//getDatabaseInfo()
userTopFiveCompare();



//export default userTopFiveCompare;