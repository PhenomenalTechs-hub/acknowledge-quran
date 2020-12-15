import React from 'react'
import {View, ScrollView,Text, Button} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ParahScreen6 extends React.Component{
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
      6.Para
      </Text>
      </View>
      <Text style={{fontWeight:"bold", fontSize:20, textAlign:"center", marginTop:20}}>
      
      * नेक कामों में दूसरों की मदद करो और बुराई में किसी का साथ न दो।{"\n"}
* दुश्मनों के साथ भी इंसाफ करो।{"\n"}
* ईमान और नेक आमाल का बदला ज़न्नत है।{"\n"}
* क़ुरान इंसानों को सीधा रास्ता दिखता है।{"\n"}
* पूरी कायनात में हुकूमत अल्लाह ही की है।{"\n"}
* इंसानियत का एहतराम दुनिया के लिए हिफाज़त का जरिया है।{"\n"}
* अच्छे आमाल बंदों को अल्लाह के करीब कर देते हैं।{"\n"}
* हमेशा इंसाफ के साथ फैसला करना चाहिए।{"\n"}
* ईमान और अल्लाह से डर कर जिंदगी गुजारना रिज़्क़ में बरकत का सबब है।{"\n"}
* एक दूसरे को बुराई से न रोकना बहुत बड़ा गुनाह है।{"\n"}
      </Text>
      </ScrollView>
      <View style={{marginTop:5, width:150, justifyContent:"center", marginLeft:100}}>
      <Button title="Back to HomePage" onPress={this.goToHomeScreen}/>
      </View>
      </>
    )
  }
}