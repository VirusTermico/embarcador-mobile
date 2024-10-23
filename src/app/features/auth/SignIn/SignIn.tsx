import {View, Text, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>SignIn</Text>
      <Button
        title="Login"
        onPress={() => {
          auth()
            .createUserWithEmailAndPassword(
              'jane.doe@example.com',
              'SuperSecretPassword!',
            )
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }

              console.error(error);
            });
        }}></Button>
    </SafeAreaView>
  );
};

export default SignIn;
