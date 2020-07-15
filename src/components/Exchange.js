import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_USERS } from '../graphql/queries'

export default () => {
  const { data: { users = [] } = {} } = useQuery(GET_USERS, {
    variables: {}
  })

  return users.map(({ userId, fullName }) => (
    <div key={userId}>
      <p>
        {userId}: {fullName}
      </p>
    </div>
  ));
}