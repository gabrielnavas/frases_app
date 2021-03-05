import { Dimensions, Platform, StatusBar } from 'react-native'
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../common/Theme/theme';

const statusHeight = Platform.OS === 'android'
  ? 0
  : `${StatusBar.currentHeight}`

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Body = styled.ScrollView`
  flex: 0.90;
  background: ${props => props.theme.colors.primary };
  margin-top: ${statusHeight};
`

export const Phrase = styled.Text`
  padding: 80px 20px;
  font-weight: bold;
  font-size: 30px;
  color: ${props => props.theme.colors.text};
`

export const Footer = styled.View`
  flex: 0.10;
`

export const ButtonNextPhrase = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.secondaryAlt};
`

export const IconNextPhrase = styled(MaterialIcons).attrs(props => ({
  name: "navigate-next",
  size: 34,
  color: theme.colors.secondary
}))`
`

export const ButtonTextNextPhrase = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  font-size: 18px;
`

