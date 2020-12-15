import React from 'react'
import {View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Alert, Platform} from 'react-native'
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component{
  goToParahScreen1=()=> {
      this.props.navigation.navigate('ParahScreen1')
    }
    goToParahScreen2=()=> {
      this.props.navigation.navigate('ParahScreen2')
    }
    goToParahScreen3=()=> {
      this.props.navigation.navigate('ParahScreen3')
    }
    goToParahScreen4=()=> {
      this.props.navigation.navigate('ParahScreen4')
    }
    goToParahScreen5=()=> {
      this.props.navigation.navigate('ParahScreen5')
    }
    goToParahScreen6=()=> {
      this.props.navigation.navigate('ParahScreen6')
    }
    goToParahScreen7=()=> {
      this.props.navigation.navigate('ParahScreen7')
    }
    goToParahScreen8=()=> {
      this.props.navigation.navigate('ParahScreen8')
    }
    goToParahScreen9=()=> {
      this.props.navigation.navigate('ParahScreen9')
    }
    goToParahScreen10=()=> {
      this.props.navigation.navigate('ParahScreen10')
    }
  render(){
    return(
      <>
      <AppHeader/>
      <ScrollView style={{marginTop:25, backgroundColor:"green", marginLeft:20, marginRight:20, borderRadius:20, height:500}}>
      <TouchableOpacity onPress={this.goToParahScreen1} style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}} >
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 1
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.goToParahScreen2} style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 2
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.goToParahScreen3} style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 3
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.goToParahScreen4} style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 4
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.goToParahScreen5} style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 5
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.goToParahScreen6} style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 6
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.goToParahScreen7} style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 7
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.goToParahScreen8} style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 8
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.goToParahScreen9} style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 9
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.goToParahScreen10} style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 10
      </Text>
      </TouchableOpacity>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 11
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 12
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 13
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 14
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 15
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 16
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 17
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 18
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 19
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 20
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 21
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 22
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 23
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 24
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 25
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 26
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 27
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 28
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 29
      </Text>
      </View>
      <View style={{backgroundColor:"white", width:65, height:80, alignSelf:"center", justifyContent:"center", marginTop:20, marginBottom:20, borderRadius:10}}>
      <Image
      style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartkey.com/mpngs/m/123-1233337_al-quran-logo-png.png',
          }}
      />
      <Text style={{alignSelf:"center" , fontWeight:"bold"}}>
      Parah 30
      </Text>
      </View>
      </ScrollView>
      </>
    )
  }
}
const styles = StyleSheet.create({imageIcon:{
    height:30,
    width:30, marginTop:20,
    alignSelf:"center"
  }
})

  