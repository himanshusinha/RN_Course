import React, { createContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CompA from '../components/CompA'

export const UserContext = createContext(null)

const UseContextHook = () => {
  return (
    <UserContext.Provider
      value={{
        name: "dakshit",
        email: "dakshit@gmail.com"
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <CompA
          user={{
            name: "himanshu", 
            email: "himanshusinha011@gmail.com"
          }}
        />
      </SafeAreaView>
    </UserContext.Provider>
  )
}

export default UseContextHook
