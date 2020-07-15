import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../graphql/queries'

export default ({ onUserSelected }) => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="user" onChange={onUserSelected}>
      {data.users.map(user => (
        <option key={user.id} value={user.fullName}>
          {user.fullName}
        </option>
      ))}
    </select>
  );
}
