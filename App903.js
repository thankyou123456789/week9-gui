import React,{Component} from 'react'
import{View,Text} from 'react-native'

class App extends Componet{
  constructor(props){
    super(props)
    this.state={
      text:"React native in thailand"
    }
  }
  render(){
    return(
      <View>
        <Text>{this.state.text}</Text>
        <Text>Hello, I have a book</Text>
      </View>
    )
  }
}
export default App;