import { Button, Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { storage } from '@/store/mmkv';
import { useMMKVString } from 'react-native-mmkv';

export default function ModalScreen() {
  const [ username, setUsername ] = useMMKVString('user.name');

  const updateUsername = () => {
    storage.set('user.name', 'Dave from Davedevs.com')
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to the APP: {username}</Text>
      <Button onPress={updateUsername} title='Update'/ >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
