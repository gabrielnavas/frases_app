import React from 'react'
import { StatusBar as StatusBarExpo } from 'react-native';
import theme from '../Theme/theme';

const StatusBar = ()  =>{
  return (
    <StatusBarExpo 
    animated={true}
    backgroundColor="#61dafb"
    barStyle='light-content'
  )
}

export default StatusBar