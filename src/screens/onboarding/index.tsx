import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Onboarding: React.FC = () => {
  const Nav: any = useNavigation();

  const handleScreens = (value: string) => {
    Nav.navigate(value);
  };

  return (
    <SafeAreaView>
      <View style={styles.default}>
        <Text style={styles.titleText}>
          Bem-vindo a este app inútil mas lindão!
        </Text>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/4/46/M%C3%A9liuz_Logo.png',
          }}
          style={styles.titleImage}
        />
        <View style={styles.onboardButtons}>
          <Button
            title="Cadastrar"
            color="#2a2a2a"
            onPress={() => handleScreens('Cadastre-se')}
          />
          {/* <View style={{height: 12}} /> */}
          <Button
            title="Entrar"
            color="#2a2a2a"
            onPress={() => handleScreens('Entrar')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  default: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardButtons: {
    justifyContent: 'space-between',
  },
  titleImage: {
    height: 200,
    width: 210,
    resizeMode: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    maxWidth: 280,
    textAlign: 'center',
  },
});

export default Onboarding;
