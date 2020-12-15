import React from 'react'
import {View, ScrollView,Text, Button} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ParahScreen2 extends React.Component{
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
      2.Para
      </Text>
      </View>
      <Text style={{fontWeight:"bold", fontSize:20, textAlign:"center", marginTop:20}}>
      
      * नेक कामों में दूसरे से बढ़ने की कोशिश करो।{"\n"}
* हर वक़्त अल्लाह को याद करो और उसका शुक्र अदा करो।{"\n"}
* अल्लाह ताला सब्र करने वालों के साथ हैं।{"\n"}
* मुसीबत आने पर सोंचे कि हमारे पास जो कुछ है सब अल्लाह का दिया हुआ है।{"\n"}
* शैतान की पैरवी न करो।{"\n"}
* हलाल और पाक रोजी हासिल करके खाओ।{"\n"}
* रोजा रखना फ़र्ज़ है।{"\n"}
* बीमार और मुसाफिर शख्स रमज़ान के बाद रोजा की कजा रख सकता है।{"\n"}
* दुआ करने वाले की दुआ अल्लाह जरूर सुनते हैं।{"\n"}
* गलत तरीके से दूसरे का माल न खाओ।{"\n"}
      </Text>
      </ScrollView>
      <View style={{marginTop:5, width:150, justifyContent:"center", marginLeft:100}}>
      <Button title="Back to HomePage" onPress={this.goToHomeScreen}/>
      </View>
      </>
    )
  }
}