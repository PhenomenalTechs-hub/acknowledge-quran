import React from 'react'
import {View, ScrollView,Text, Button} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class ParahScreen4 extends React.Component{
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
      4.Para
      </Text>
      </View>
      <Text style={{fontWeight:"bold", fontSize:20, textAlign:"center", marginTop:20}}>
      
      * अपने पसंदीदा मालों में से अल्लाह के रास्ते में खर्च करो।{"\n"}
* गुनाहों से बचने के लिए अपनी पूरी ताकत लगा दो।{"\n"}
* कामयाबी हासिल करने के लिए नेकी का हुक्म करो और बुराई से रोको।{"\n"}
* नेकी का हुक्म करने, बुराई से रोकने और ईमान की वजह से तुम बेहतरीन उम्मत हो।{"\n"}
* अल्लाह ताला दिल की हर बात जनता है।{"\n"}
* सूद खाने से बचो।{"\n"}
* शुक्र करने वालों को अल्लाह बेहतरीन बदला देंगे।{"\n"}
* जो अल्लाह पर भरोसा करता है, अल्लाह उससे मोहब्बत करते हैं।{"\n"}
* ज़कात अदा करने वालों का अंजाम अच्छा है।{"\n"}
* दुनिया की बाहरी चमक दमक सिर्फ एक धोखा है।{"\n"}
* नेक लोगों का इनाम दुनिया और आख़ेरत में है।{"\n"}
* ईमानदारों को सब्र करना चाहिए।{"\n"}
* यतीमों का माल खाना बड़ा गुनाह है।{"\n"}
* यतीमों का माल खाना पेट में अंगारे भरना है।{"\n"}
* अपनी बीवियों के साथ अच्छा सलूक करो।{"\n"}
      </Text>
      </ScrollView>
      <View style={{marginTop:5, width:150, justifyContent:"center", marginLeft:100}}>
      <Button title="Back to HomePage" onPress={this.goToHomeScreen}/>
      </View>
      </>
    )
  }
}