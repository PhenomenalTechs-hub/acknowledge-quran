import React from 'react'
import {View, ScrollView,Text, Button} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ParahScreen1 extends React.Component{
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
      1.Para
      </Text>
      </View>
      <Text style={{fontWeight:"bold", fontSize:20, textAlign:"center", marginTop:20}}>
      
      * एक अल्लाह ही की इबादत करो।{"\n"}
* क़ुरान करीम अल्लाह की सच्ची किताब है।{"\n"}
* नेक अमल करने वाले मोमिन बन्दों के लिए जन्नत में नेमतें हैं।{"\n"}
* हक़ बात को मत छुपाओ।{"\n"}
* नेक काम की दावत देते हुए खुद अमल करो।{"\n"}
* किसी नेमत के न मिलने पर सब्र करो और नमाज़ अदा करो।{"\n"}
* कयामत के दिन कोई किसी के कुछ काम न आएगा।{"\n"}
* गुनाह से बचो।{"\n"}
* नमाज़ कायम करो और ज़कात अदा करो।{"\n"}
      </Text>
      </ScrollView>
      <View style={{marginTop:5, width:150, justifyContent:"center", marginLeft:100}}>
      <Button title="Back to HomePage" onPress={this.goToHomeScreen}/>
      </View>
      </>
    )
  }
}