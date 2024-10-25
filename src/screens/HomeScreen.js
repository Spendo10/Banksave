import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation, onLogout }) {
  const [balance, setBalance] = useState(0);

  return (
    <View>
      <Text>Balance: ₦{balance}</Text>
      <Button title="Deposit" onPress={() => navigation.navigate('Deposit')} />
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
}
