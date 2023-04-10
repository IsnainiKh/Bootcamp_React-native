/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  onChangeText,
  text,
  Button,
  Image,
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.Container}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.titleAtas}>
          <Text style={styles.textTitle}>Digital Approval</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://www.hargatoyotamakassar.id/wp-content/uploads/2021/08/Logo-Toyota-Trust.png',
          }}
          style={{
            width: 140,
            height: 60,
            margin: 20,
            alignSelf: 'center',
          }}></Image>
        <TextInput
          style={styles.inputEmail}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.inputSandi}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={text => setUsername(text)}
        />
        <Text style={styles.txtResetPassword}>Reset Password</Text>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    backgroundColor: '#ffffff',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: '90%',
    height: '60%',
    borderWidth: 4,
    borderColor: '#dedede',
    margin: 20,
    padding: 20,
  },

  titleAtas: {
    width: '80%',
    backgroundColor: '#002558',
    borderRadius: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -70,
    marginBottom: 5,
    alignSelf: 'center',
  },

  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },

  inputEmail: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  inputSandi: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
  txtResetPassword: {
    fontSize: 15,
    alignSelf: 'flex-end',
    color:'#287be5',
    fontStyle: 'italic',
  },
 
  btnLogin: {
    //width: '80%',
    backgroundColor: '#287be5',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});

export default App;
