import React from 'react'
import {View, ScrollView,Text, Button} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ParahScreen5 extends React.Component{
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
      5.Para
      </Text>
      </View>
      <Text style={{fontWeight:"bold", fontSize:20, textAlign:"center", marginTop:20}}>
      
      * दूसरों का माल नाहक तरीके से मत खाओ।{"\n"}
* कबीरा गुनाह से बचने से छोटे गुनाह माफ होते हैं।{"\n"}
* घर में औरतों के सारे इंतजामात मर्द के जिम्मे है।{"\n"}
* अल्लाह और बंदों के होकूक अदा करो।{"\n"}
* एक दिन जरूर मौत आएगी।{"\n"}
* जायज सिफारिश पर सवाब और नाजायज सिफारिश पर वबाल है।{"\n"}
* सलाम का जवाब बेहतर अंदाज में दो।{"\n"}
* दूसरों पर इल्जाम लगाने वालों को दोहरा अज़ाब है।{"\n"}
* इंसाफ करो और सच्ची गवाही दो।{"\n"}
* अल्लाह, रसूल और तमाम आसमानी किताबों पर ईमान लाना फ़र्ज़ है।{"\n"}
      </Text>
      </ScrollView>
      <View style={{marginTop:5, width:150, justifyContent:"center", marginLeft:100}}>
      <Button title="Back to HomePage" onPress={this.goToHomeScreen}/>
      </View>
      </>
    )
  }
}