import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Hello: React.FC = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
  });
  const [showData, setShowData] = useState(false);
  const handleShowData = () => {
    setShowData(true);
  };

  return (
    <View>
      <Text testID="TextA">Hello World</Text>
      <Text testID="TextB">Hello World 2</Text>
      <View>
        <TextInput
          placeholder="Informe seu nome"
          onChangeText={text => setData({...data, name: text})}
          value={data.name}
        />
        <TextInput
          placeholder="Informe seu e-mail"
          onChangeText={text => setData({...data, email: text})}
          value={data.email}
        />
        <Button
          title="Send"
          onPress={handleShowData}
          accessibilityLabel="sendButton"
        />
        {showData && (
          <View>
            <Text testID="userName">{data.name}</Text>
            <Text testID="userEmail">{data.email}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Hello;
