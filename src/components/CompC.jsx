import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { UserContext } from '../hooks/UseContextHookDemo'

const CompC = ({ user }) => {
  const userFromContext = useContext(UserContext)

  return (
    <View style={{ padding: 10 }}>
      {/* Props se */}
      <Text>CompC (Props): {user?.name}</Text>
      <Text>Email (Props): {user?.email}</Text>

      {/* Context se */}
      <Text>CompC (Context): {userFromContext.name}</Text>
      <Text>Email (Context): {userFromContext.email}</Text>
    </View>
  )
}

export default CompC
