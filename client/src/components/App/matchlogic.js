//import React, { useState, useEffect } from 'react';
//import { QUERY_ME } from "../../utils/queries";
//get use query
// const localStorageArr = window.localStorage.getItem('hi2');
// console.log(localStorageArr);
//console.log(`Hi ${localStorageArr} is in localStorage.`);
//temporary variables, to be replaced with array from topfive page
//TODO: replace with previous page data from selection page
const userTopFive_1 = [
  "The Da Vinci Code (Series)",
  "Forrest Gump",
  "Toy Story (Series)",
  "Captain Phillips",
  "Apollo 13",
];

// This array will hold values from previous page of user top five.
const CurrentLoggedinUser = [...userTopFive_1];

const marvin = [
  "The Da Vinci Code (Series)",
  "Forrest Gump",
  "Toy Story (Series)",
  "Captain Phillips",
  "Apollo 13",
];
const jon = [
  "Forrest Gump",
  "Apollo 13",
  "Captain Phillips",
  "Catch Me if You Can",
  "Sully",
];
const jordan = [
  "The Green Mile",
  "Big",
  "Cast Away",
  "Saving Private Ryan",
  "Sleepless in Seattle",
];
const david = [
  "Joe Vs The Volcano",
  "Forrest Gump",
  "Sleepless in Seattle",
  "Big",
  "That Thing You Do!",
];
const savino = [
  "Forrest Gump",
  "Sleepless in Seattle",
  "Big",
  "That Thing You Do!",
  "Sully",
];

// This array will hold values from previous page of database top five.
const databaseLoggedindatabase = [marvin, savino, jon, jordan, david];

// Variable that Queries the database for top five arrays
//Const allUser = { movies: []}

const userTopFiveCompare = () => {
  // console.log(CurrentLoggedinUser);
  // console.log(databaseLoggedindatabase);
  let jon = jon;
  let marvin = marvin;
  jon.sort();
  marvin.sort();
  //let foundMatches = 0;

  //for (let i = 0; i < CurrentLoggedinUser.length; i++) {
  if (jon === marvin) {
    //   //foundMatches++;
    //   console.log("you matched with Marvin");
    // } else if (userTopFive_1 === savino) {
    //   //foundMatches++;
    //   console.log("you matched with Savino");
    // } else if (userTopFive_1 === jordan) {
    //   //foundMatches++;
    //   console.log("you matched with Jordan");
    // } else if (userTopFive_1 === jon) {
    //   //foundMatches++;
    //   console.log("you matched with Jon");
    // } else (userTopFive_1 === david)
    // //foundMatches++;
    // console.log(
    //   "you matched with david....but he's married...so good luck out there"
    // );

    console.log("match");
    return true;
  }
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
