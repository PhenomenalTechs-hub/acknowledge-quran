import React from 'react'
import {View, ScrollView,Text, Button} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ParahScreen8 extends React.Component{
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
      8.Para
      </Text>
      </View>
      <Text style={{fontWeight:"bold", fontSize:20, textAlign:"center", marginTop:20}}>
      
      * गुनाह की सजा जरूर मिलेगी।{"\n"}
* फजूलखर्ची करने वालों को अल्लाह पसन्द नहीं करता।{"\n"}
* शैतान इंसान का खुला दुश्मन है।{"\n"}
* हमारा और हमारी औलाद का रिज़्क़ अल्लाह के जिम्मे है।{"\n"}
* हमेशा हक़ बात कहना चाहिए।{"\n"}
* राहे हक़ पर चलने ही में कामयाबी है।{"\n"}
* एक नेकी का सवाब दस गुना है।{"\n"}
* कयामत के दिन किसी दूसरे का गुनाह अपने सर कोई नहीं लेगा।{"\n"}
* शैतान की चालबाजी से होशियार रहना चाहिए।{"\n"}
* खाने पीने में हद से तजावीज न करो ।{"\n"}
* खौफ और उम्मीद के साथ दुआ मांगना चाहिए।{"\n"}
* नाप तौल में कमी नहीं करना चाहिए।{"\n"}
      </Text>
      </ScrollView>
      <View style={{marginTop:5, width:150, justifyContent:"center", marginLeft:100}}>
      <Button title="Back to HomePage" onPress={this.goToHomeScreen}/>
      </View>
      </>
    )
  }
}