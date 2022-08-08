import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  
    query me {
  me {
    username
    movies {
      movieName
    }
  }
}
  
`;

// export const getMatches = gql`
  
//     query me {
//   me {
//     username
//     movies {
//       movieName
//     }
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

export const getUsers = gql`
  
  query users {
    users {
    username
    movies {
      movieName
    }
  }
  }
`;