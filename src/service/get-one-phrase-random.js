let lastIndex

const getOnePhraseRandom = () => {
  const phrases = [
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "Imagine uma nova história para sua vida e acredite nela.",
    "Não espere por uma crise para descobrir o que é importante em sua vida.",
    "Perder tempo em aprender coisas que não interessam, priva-nos de descobrir coisas interessantes.",
    "Pessimismo leva à fraqueza, otimismo ao poder.",
    "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
    "O pessimismo, depois de você se acostumar a ele, é tão agradável quanto o otimismo.",
    "Não são as nossas ideias que nos fazem otimistas ou pessimistas, mas o otimismo e o pessimismo de origem fisiológica que fazem as nossas ideias.",
    "O contrário do pessimismo raramente é o otimismo. O contrário do pessimismo, se não é a boa intenção de injetar força nos fracos, o que é bonito e faz bem, é quase sempre a idiota.",
    "Somente quando encontramos o amor, é que descobrimos o que nos faltava na vida.",
    "Para os crentes, Deus está no princípio das coisas. Para os cientistas, no final de toda reflexão.",
    "Antes, a questão era descobrir se a vida precisava de ter algum significado para ser vivida. Agora, ao contrário, ficou evidente que ela será vivida melhor se não tiver significado.",
    "Temos de descobrir segurança dentro de nós próprios. Durante o curto espaço de tempo da nossa vida precisamos encontrar o nosso próprio critério de relações com a existência em que participamos tão transitoriamente.",
    "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
    "Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior.",
    "Evite desencorajar, mantenha ocupações e faça do otimismo a maneira de viver. Isso restaura a fé em si.",
    "O pessimismo torna os homens cautelosos, enquanto, o otimismo torna os homens imprudentes.",
    "Otimismo é a mania de sustentar que tudo está bem quando tudo está mal.",
    "Descobrir consiste em olhar para o que todo mundo está vendo e pensar uma coisa diferente.",
    "A sabedoria começa na reflexão.",
  ]
  let index = Math.floor(Math.random() * phrases.length)
  while(index === lastIndex) {
    index = Math.floor(Math.random() * phrases.length)
  }
  return phrases[index]
}

export default getOnePhraseRandom