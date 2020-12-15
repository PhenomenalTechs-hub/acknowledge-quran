import React from 'react'
import {View, ScrollView,Text, Button} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ParahScreen3 extends React.Component{
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
      3.Para
      </Text>
      </View>
      <Text style={{fontWeight:"bold", fontSize:20, textAlign:"center", marginTop:20}}>
      
      * अपना माल अल्लाह के रास्ते में ख़र्च करो,आख़ेरत में खूब सवाब मिलेगा।{"\n"}
* नेक कामों में घटिया माल देने से बचना चाहिए।{"\n"}
* कसरत से खर्च करने वालों को अल्लाह ताला बेहतरीन बदला देगा।{"\n"}
* सूद खाने का अंजाम बुरा है।{"\n"}
* उधार का मामला करते वक़्त लिख लेना चाहिए।{"\n"}
* अल्लाह ताला से मांगने की बेहतरीन अदा दुआ है।{"\n"}
* अल्लाह ताला के यहां दीन इस्लाम मक़बूल है।{"\n"}
* क़रार को पूरा करना खुशखबरी है और तोडना बुरा है।{"\n"}
      </Text>
      </ScrollView>
      <View style={{marginTop:5, width:150, justifyContent:"center", marginLeft:100}}>
      <Button title="Back to HomePage" onPress={this.goToHomeScreen}/>
      </View>
      </>
    )
  }
}