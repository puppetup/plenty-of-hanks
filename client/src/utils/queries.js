import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  
    query me {
  me {
    username
    movies
  }
}
  
`;

// export const GET_MATCHES = gql`
  
//     query me {
//   me {
//     username
//     movies 
//   }
// }
  
// `;




export const getMovies = gql`
  
  query movies {
  movies {
      movieName
      yearReleased
      imageLink
      }
    }
  
`;