import React, { useEffect, useState } from 'react';
import { SafeAreaView, VirtualizedList, StyleSheet } from 'react-native';
import { statusBarHeight } from 'expo-constants'
import { requestPermissionsAsync, getContactsAsync, Fields } from 'expo-contacts'

import Chat from '../components/Chat';

export default function Home(props) {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    (async () => {
      const { status } = await requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await getContactsAsync({
          fields: [Fields.Emails, Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          // console.log('test contact ', data);
          setContacts(data.map(contact => {
            return {
              key: contact.id,
              name: contact.name,
            }
          }))
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={contacts}
        initialNumToRender={4}
        renderItem={({ item }) => <Chat name={item.name}></Chat>}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}

const getItem = (data, index) => {
  return data[index]
}

const getItemCount = (data) => {
  return data.length;
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#0000ff',
    flex: 1,
    marginTop: statusBarHeight,
    width: '100%',
  },
});