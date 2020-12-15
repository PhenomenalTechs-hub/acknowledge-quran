import React from 'react'
import {View, ScrollView,Text, Button} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ParahScreen10 extends React.Component{
  goToHomeScreen=()=> {
      this.props.navigation.navigate('HomeScreen')
    }
  render(){
    return(
      <>
      <AppHeader/>
      <ScrollView style={{backgroundColor:"green",marginTop:10, height:500}}>
      <View style={{border:"1px solid black", borderRadius:20}}>
      <Text style={{fontSize:20, fontWeight:"bold",textAlign:"center"}}>
      क़ुरान करीम अल्लाह की वह किताब है जिसके बदौलत इन्सानों को हिदायत और इज़्ज़त मिली।
      </Text>
      </View>
      <View style={{borderBottomWidth:2}}>
      <Text style={{marginTop:20, fontSize:16, fontWeight:"bold", textAlign:"center"}}>
      10.Para
      </Text>
      </View>
      <Text style={{fontWeight:"bold", fontSize:20, textAlign:"center", marginTop:20}}>
      
      * आपस के लड़ाई झगड़े के बड़े नुकसान हैं।{"\n"}
* हालात आने पर जमे रहो।{"\n"}
* ज़कात न देने वाले को सजा है।{"\n"}
* माल और औलाद तुम्हें सीधे रास्ते से भटका न दे।{"\n"}
* ईमान वालों से अल्लाह का वादा है।{"\n"}
* अल्लाह से किये हुए अहद को पूरा न करने का अंजाम बुरा है।{"\n"}
      </Text>
      </ScrollView>
      <View style={{marginTop:5, width:150, justifyContent:"center", marginLeft:100}}>
      <Button title="Back to HomePage" onPress={this.goToHomeScreen}/>
      </View>
      </>
    )
  }
}