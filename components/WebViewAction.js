import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewAction = () => {
  return <WebView source={{uri: 'https://princesharma01.netlify.app/'}} />;
};

export default WebViewAction;

const styles = StyleSheet.create({});
