import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, ActivityIndicator, View, SafeAreaView, ScrollView, Image, Pressable, Button, Alert} from 'react-native';

export default function App() {

  const [Pressed, setPressed] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      
        <Text style={styles1.text} >sa marche pas !!!! hahahah </Text>
        <Text style={styles1.text} >je suis le boss</Text>
        <Text style={styles1.text} >de react native benoit !! </Text>
        <Image
        style={divImage.container}
        source={{
          uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',
        }}
        />
        <Image
          style={divImage.container}
          source={{
          uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',
          }}
        />
        <Image
        style={divImage.container}
        source={require('./Asset/konexio-logo_1.png')}
        />

        <Button
          title="Press me"
          onPress={() => Alert.alert('vous avez appuyer ')}
        />
        <StatusBar style="auto" />
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="white" />
        </View>
        
      </ScrollView>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  tinyLogo: {
    width :70,
    height: 70,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
 
});
const divImage =  StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    marginVertical: 50,
  }
})
const styles1 = StyleSheet.create({
  container: {
    borderColor: 'white',
    backgroundColor: 'white',
    
  },
  text: {
    fontSize: 30,
    color:'red',
    textAlign : "center",
    fontWeight: "bold",
    paddingVertical: 80,
  },
});
