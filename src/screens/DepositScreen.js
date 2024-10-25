import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function DepositScreen({ navigation }) {
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    alert(`₦${amount} deposited successfully!`);
    setAmount('');
    navigation.goBack();
  };

  return (
    <View>
      <Text>Enter Amount to Deposit:</Text>
      <TextInput
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Deposit" onPress={handleDeposit} />
    </View>
  );
}
