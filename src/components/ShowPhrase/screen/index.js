import React from 'react'
import getOnePhraseRandom from '../services/get-one-phrase-random'

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
    </Container>
  )
}

export default ShowOnePhrase