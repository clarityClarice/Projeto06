import React from 'react';
import { Browser } from './styles';

export default function Repository({ navigation }) {
  const repository = navigation.getParam('repository');

  return <Browser source={{ uri: repository.html_url }} />;
}

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});