import React from 'react'
import getOnePhraseRandom from '../../../service/get-one-phrase-random'

import theme from '../../common/Theme/theme'

import {
  Container,
  Wrapper,
  Body,
  Footer,
  Phrase,
  ButtonNextPhrase,
  IconNextPhrase,
  ButtonTextNextPhrase
} from './styles'

const ShowOnePhrase = () => {

  const [phrase, setPhrase] = React.useState('')

  React.useEffect(() => {
    handleNewPhrase()
  }, [])

  const handleNewPhrase = React.useCallback(() => {
    const newPhrase = getOnePhraseRandom()
    setPhrase(newPhrase)
  }, [phrase])

  return (
    <Container>
      <Wrapper>
        <Body>
          <Phrase>{phrase}</Phrase>
        </Body>
        <Footer>
          <ButtonNextPhrase 
            max
            onPress={handleNewPhrase}>
            <ButtonTextNextPhrase>
              Proxima frase
              </ButtonTextNextPhrase>
            <IconNextPhrase />
          </ButtonNextPhrase>
        </Footer>
      </Wrapper>
    </Container>
  )
}

export default ShowOnePhrase