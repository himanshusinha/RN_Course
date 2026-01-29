import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator,   } from "react-native";
import {API_HOST} from '@env';
import { User } from "./src/types/types";
import {SafeAreaView} from 'react-native-safe-area-context'


const App = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const apiURL=`${API_HOST}/users`

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />
  }

  return (
    <SafeAreaView style={{padding:20}}>
      <FlatList<User>
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
