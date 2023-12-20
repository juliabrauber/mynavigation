import React from "react";
import { Text, View } from 'react-native';

export default function Contacts({ navigation }) {
  const navigateToInformation = (info) => {
    navigation.navigate('Information', info);
  };

  return (
    <View style={{ marginTop: 60 }}>
      <View>
        <Text>Nome: João Costa</Text>
        <Text>Telefone: (11) 3642-2902</Text>
        <Text
          onPress={() => navigateToInformation({
            nome: 'João Costa',
            telefone: '(11) 3642-2902',
            endereco: 'Rua Flores',
            numero: '258',
            profissao: 'Engenheiro de Software',
            email: 'joaocosta@hotmail.com',
          })}
        >
          Information ...
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Nome: Julia Barbosa</Text>
        <Text>Telefone: (11) 9658-6657</Text>
        <Text
          onPress={() => navigateToInformation({
            nome: 'Julia Barbosa',
            telefone: '(11) 9658-6657',
            endereco: 'Rua Buritis',
            numero: '505',
            profissao: 'Analista de Software',
            email: 'juliabarbosa@hotmail.com',
          })}
        >
          Information ...
        </Text>
      </View>
    </View>
  );
}
