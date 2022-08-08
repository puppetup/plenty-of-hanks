import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { QUERY_ME, getUsers } from "../../utils/queries";
//get use query

const Matchlogic = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || {};
  const { loading: loading_user, data: data_user } = useQuery(getUsers);
  const users = data_user?.users || [];
  const [myMovies, setmyMovies] = useState([])
  const [theirMovies, settheirMovies] = useState([]);
  useEffect(() => {
    console.log(user);
    setmyMovies(user?.movies)

    
  }, [user]);
 useEffect(() => {
    console.log(user);
    settheirMovies(users)
    
    
  }, [users]);
  useEffect(() => {
    console.log(user);
    console.log(myMovies)

    
  }, [myMovies]);
 useEffect(() => {
    console.log(user);
    console.log(theirMovies)
    
    
  }, [theirMovies]);
  // const localStorageArr = window.localStorage.getItem('hi2');
  // console.log(localStorageArr);
  //console.log(`Hi ${localStorageArr} is in localStorage.`);
  //temporary variables, to be replaced with array from topfive page
  //TODO: replace with previous page data from selection page
  function calculate () {

  
  const userTopFive_1 = [0, 1, 2, 3, 4, 9];
  const userTopFive_2 = [0, 1, 2, 3, 4];
  const userTopFive_3 = [0, 1, 2, 3, 4];
  const userTopFive_4 = [0, 1, 2, 3, 4];
  const userTopFive_5 = [0, 1, 2, 3, 4];

  // This array will hold values from previous page of user top five.
  const CurrentLoggedinUser = [...user.movies];

  const databaseTopFive_1 = users[0].movies;
  const databaseTopFive_2 = users[1].movies;
  const databaseTopFive_3 = users[2].movies;
  const databaseTopFive_4 = users[3].movies;
  const databaseTopFive_5 = users[4].movies;

  // This array will hold values from previous page of database top five.
  let databaseLoggedindatabase = [
    ...databaseTopFive_1
    // databaseTopFive_2.sort(),
    // databaseTopFive_3.sort(),
    // databaseTopFive_4.sort(),
    // databaseTopFive_5.sort(),
  ];

  // Variable that Queries the database for top five arrays
  //Const allUser = { movies: []}
  console.log("hello");



  //   if (CurrentLoggedinUser.length !== databaseLoggedindatabase.length) {
  //     console.log("checked length");
  //     return false;
  //   }
  CurrentLoggedinUser.sort();
  databaseLoggedindatabase.sort();
  console.log(CurrentLoggedinUser);
  console.log(databaseLoggedindatabase);
  let user_1_foundmatches = 0;
  console.log(databaseLoggedindatabase)
  for (let i = 0; i < CurrentLoggedinUser.length; i++) {
    
      if (CurrentLoggedinUser[i] === databaseLoggedindatabase[i]) {
        user_1_foundmatches++;
       // console.log(databaseLoggedindatabase[i][j]);
      }
    
  }
  console.log(user_1_foundmatches);
   databaseLoggedindatabase = [
    //...databaseTopFive_1
    ...databaseTopFive_2
    // databaseTopFive_3.sort(),
    // databaseTopFive_4.sort(),
    // databaseTopFive_5.sort(),
  ];
  CurrentLoggedinUser.sort();
  databaseLoggedindatabase.sort();
  console.log(CurrentLoggedinUser);
  console.log(databaseLoggedindatabase);
  let user_2_foundmatches = 0;
  console.log(databaseLoggedindatabase)
  for (let i = 0; i < CurrentLoggedinUser.length; i++) {
    
      if (CurrentLoggedinUser[i] === databaseLoggedindatabase[i]) {
        user_2_foundmatches++;
       // console.log(databaseLoggedindatabase[i][j]);
      }
    
  }
  console.log(user_2_foundmatches);
 // console.log(foundMatches / 5);
  return true;
}
return <button onClick={calculate}>click me</button>
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

export default Matchlogic;
