import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class ClassComponent extends Component {
  constructor(props){
    super(props)
      this.state={
        counter:0
      }
  }
  render() {
    return (
      <View>
        <Text onPress={()=>this.setState({counter:this.state.counter+1})}> add component </Text>
      </View>
    )
  }
}

export default ClassComponent
