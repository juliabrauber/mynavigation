import React from "react";
import { Text, View } from 'react-native';

export default function Information( {route} ){
    return(
        <View style={{marginTop:60}}> 
            <Text>nome: {route.params?.nome}</Text>
            <Text>telefone: {route.params?.telefone}</Text>
            <Text>endereço: {route.params?.endereco}</Text>
            <Text>n°: {route.params?.numero}</Text>
            <Text>profissao: {route.params?.profissao}</Text>
            <Text>email: {route.params?.email}</Text>
        </View>
    )
}