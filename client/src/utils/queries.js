import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    query Query($meId: ID!) {
  me(id: $meId) {
    username
    movies {
      movieName
    }
  }
}
  }
`;

export const getMovies = gql`
  {
  movies {
      movieName
      yearReleased
      imageLink
    }
  }
`;