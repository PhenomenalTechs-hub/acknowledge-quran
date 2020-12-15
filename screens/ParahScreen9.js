import React from 'react'
import {View, ScrollView,Text, Button} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ParahScreen9 extends React.Component{
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
      9.Para
      </Text>
      </View>
      <Text style={{fontWeight:"bold", fontSize:20, textAlign:"center", marginTop:20}}>
      
      * धन और दौलत न होते हुए भी हक़ पर कायम रहना चाहिए।{"\n"}
* अल्लाह से डरने और ज़कात अदा करने वाले मोमिन के लिए आख़ेरत के लिए खुशखबरी है।{"\n"}
* शैरीयत पर अमल करने वाले के लिए कामयाबी है।{"\n"}
* तमाम रूह अल्लाह के एक होने का इकरार कर चुके हैं।{"\n"}
* क़ुरान शरीफ को गौर से पढ़ना चाहिए और ख़ामोशी से सुनना चाहिए।{"\n"}
* सुबह शाम अपने रब का ज़िक्र करना चाहिए।{"\n"}
* अल्लाह और रसूल का कामिल पैरवी ईमान की निशानी है।{"\n"}
* अल्लाह और रसूल की पैरवी से मुंह नहीं मोड़ना चाहिए।{"\n"}
* अमानत में खयानत मत करो।{"\n"}
* तक़वा का ईनाम है।{"\n"}
      </Text>
      </ScrollView>
      <View style={{marginTop:5, width:150, justifyContent:"center", marginLeft:100}}>
      <Button title="Back to HomePage" onPress={this.goToHomeScreen}/>
      </View>
      </>
    )
  }
}