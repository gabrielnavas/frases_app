import React from 'react'
import { StatusBar as StatusBarExpo } from 'react-native';
import theme from '../Theme/theme';

const StatusBar = ()  =>
  <StatusBarExpo 
    animated={true}
    backgroundColor="#61dafb"
    barStyle='dark-content'
  />

export default StatusBar