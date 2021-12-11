import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import api from '../../services';
import {IUser} from '../../types/index';

const SignUp: React.FC = () => {
  const navigation: void | any = useNavigation();

  const [data, setData] = useState<IUser>({} as IUser);

  const handleLogin = () => {
    navigation.navigate('Entrar');
  };

  const handleRegister = useCallback(() => {
    api
      .post('users', data)
      .then(() => {
        navigation.navigate('Entrar');
        setData({
          name: '',
          email: '',
          password: '',
        });
      })
      .catch(() => console.warn())
      .finally(() => {
        setData({
          name: '',
          email: '',
          password: '',
        });
      });
  }, [data, navigation]);

  return (
    <SafeAreaView>
      <View style={styles.default}>
        <View style={styles.card}>
          <Text style={styles.title}>Cadastrar</Text>
          <TextInput
            placeholder="Informe seu nome"
            onChangeText={e => setData({...data, name: e})}
          />
          <TextInput
            placeholder="Informe seu email"
            onChangeText={e => setData({...data, email: e})}
          />
          <TextInput
            placeholder="Informe sua senha"
            secureTextEntry={true}
            onChangeText={e => setData({...data, password: e})}
          />
          <Button
            title="Cadastrar"
            onPress={handleRegister}
            color="#2a2a2a"
            accessibilityLabel="Realizar cadastro"
          />
        </View>
        <View>
          <Text style={styles.outText}>Já possui cadastro?</Text>
          <TouchableOpacity onPress={handleLogin} style={styles.linkScreen}>
            <Text style={styles.innerText}>Logar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  card: {
    backgroundColor: '#FECAD6',
    paddingHorizontal: 45,
    paddingVertical: 45,
    borderRadius: 12,
  },
  title: {
    alignContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  linkScreen: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  innerText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  outText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
