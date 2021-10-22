import React from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

const message = {
  id: '1',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cum! A consequuntur ad repudiandae, sapiente ea voluptas illo ipsa ullam tenetur rem nobis, explicabo facilis qui quasi doloribus velit. Nam.',
  user: {
    name: "Brunno Sena",
    avatar_url: 'https://github.com/brunnosena.png'
  }
}

export function MessageList(){
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message 
        data={message}
      />
      <Message 
        data={message}
      />
      <Message 
        data={message}
      />
    </ScrollView>
  );
}