import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Default');
  const [ip,setIp] = useState('0.0.0');
  const foo = () => {
    if(name === 'Default')setName("Flash");
  else if(name === 'Flash') setName('Mahendra')
  else setName('Default')};
const ipFinder = () => {

  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    var ip = '00000';
    ip = data.ip;
    console.log(ip)
    setIp(ip);
  });

};
  return (
    <View style={styles.container}>
            <Button style={styles.button} title='My Youtube channel' onPress={() => {Linking.openURL('https://www.youtube.com/@mahendragoud8406')}}></Button>
      <Text style={styles.button}>My name is {name}</Text>
      <Button margin title='update State' onPress={foo}></Button>
      <Text style={styles.button}>My git-hub page</Text>
      <Button title='go to gitHub' onPress={() => {Linking.openURL('https://github.com/trozanmahendra')}}></Button>
      <Text style={styles.button}>My Ip-address is {ip}</Text>
      <Button title='get my Ip' onPress={ipFinder}></Button>
      <Button title='clear my Ip' onPress={() => setIp('0.0.0')}></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding:10
  },
  button:{
    margin: 10,
    padding:10
  }
});