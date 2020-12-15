import React from 'react'
import {View, ScrollView,Text, Button} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ParahScreen7 extends React.Component{
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
      7.Para
      </Text>
      </View>
      <Text style={{fontWeight:"bold", fontSize:20, textAlign:"center", marginTop:20}}>
      
      * अल्लाह ताला ने हलाल और पाकीजा गजा खाने का हुक्म दिया है।{"\n"}
* पहले अपनी हिदायत की फिक्र करनी चाहिए।{"\n"}
* अल्लाह ताला की रज़ा सबसे बड़ी कामयाबी है।{"\n"}
* अल्लाह ताला ने तय कर रखा है कि कौन कबतक जिंदा रहेगा।{"\n"}
* इंसान का कोई राज अल्लाह से छुपा नहीं है।{"\n"}
* गुनाहों से बचने वालों के लिए आखेरत बेहतरीन घर है।{"\n"}
* हर तरह का इल्म अल्लाह के पास है।{"\n"}
* नमाज़ की पाबंदी करो और अल्लाह से डरो।{"\n"}
* दूसरे मजाहिब के माबूदों को भला बुरा न कहो।{"\n"}
      </Text>
      </ScrollView>
      <View style={{marginTop:5, width:150, justifyContent:"center", marginLeft:100}}>
      <Button title="Back to HomePage" onPress={this.goToHomeScreen}/>
      </View>
      </>
    )
  }
}