import { Dimensions, Platform, StatusBar } from 'react-native'
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../../common/Theme/theme';

const statusHeight = Platform.OS === 'android'
  ? `${StatusBar.currentHeight}px`
  : 0

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary };
  margin-top: ${statusHeight};
`

export const Wrapper = styled.ScrollView`
  padding: 40px 20px;
  border-radius: 20px;
  height: ${Dimensions.get('window').height * 0.80 + 'px'};
`

export const Body = styled.View`
  padding: 5px;
`


export const Phrase = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: ${props => props.theme.colors.text};
`

export const Footer = styled.View`
  margin: 10px;
`

export const ButtonNextPhrase = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  background: ${props => props.theme.colors.secondaryAlt};
`

export const IconNextPhrase = styled(MaterialIcons).attrs(props => ({
  name: "navigate-next",
  size: 24,
  color: theme.colors.secondary
}))`
`

export const ButtonTextNextPhrase = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  font-size: 14px;
`

