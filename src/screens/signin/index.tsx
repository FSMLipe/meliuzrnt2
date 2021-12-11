/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

import jwtDecode, {JwtPayload} from 'jwt-decode';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import api from '../../services';
import {getToken} from '../../store/modules/auth/action';

import {IUser} from '../../types';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state: any) => state);
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigation: void | any = useNavigation();

  const handleLogin = () => {
    api
      .post('session', user, {
        headers: {
          ContentType: 'application/json',
        },
      })
      .then(res => {
        dispatch(getToken(res.data));
        console.log(res.data);
        setTimeout(() => {
          navigation.navigate('dash');
        }, 1500);
      })
      .catch(err => console.warn(err))
      .finally(() => {
        setUser({
          email: '',
          password: '',
        });
      });
  };

  const isAuth: any = () => {
    if (globalState?.token) {
      const tokenPayload: any = jwtDecode<JwtPayload>(globalState?.token);
      const expToken = tokenPayload.exp;
      const timeNow = Date.now() / 1000;

      return timeNow > expToken ? false : true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (isAuth()) {
      navigation.navigate('dash');
    }
  }, [globalState]);

  const handleRegister = () => {
    navigation.navigate('Cadastre-se');
  };

  return (
    <SafeAreaView>
      <View style={styles.default}>
        <View style={styles.card}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.sectionStyle}>
            <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/email-2155119-1814289.png',
              }}
              style={styles.imageStyle}
            />
            <TextInput
              placeholder="Informe seu e-mail"
              value={user.email}
              placeholderTextColor={'#555555'}
              onChangeText={e => setUser({...user, email: e})}
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image
              source={{
                uri: 'http://cdn.onlinewebfonts.com/svg/img_398183.png',
              }}
              style={styles.imageStyle}
            />
            <TextInput
              placeholder="Informe sua senha"
              value={user.password}
              secureTextEntry={true}
              placeholderTextColor={'#555555'}
              onChangeText={e => setUser({...user, password: e})}
            />
          </View>
          <Button
            title="Entrar"
            onPress={handleLogin}
            color="#2a2a2a"
            accessibilityLabel="Fazer login"
          />
        </View>
        <View>
          <Text style={styles.outText}>Ainda não possui conta?</Text>
          <TouchableOpacity onPress={handleRegister} style={styles.linkScreen}>
            <Text style={styles.innerText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  default: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FECAD6',
    paddingHorizontal: 45,
    paddingVertical: 45,
    borderRadius: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222',
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
  titleView: {
    alignItems: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1.0,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    minWidth: 190,
  },
  imageStyle: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 25,
    width: 25,
    alignItems: 'flex-start',
    resizeMode: 'stretch',
  },
});
