import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Container, NewTopicButton, NewTopicContent, NewTopicForm, NewTopicTitle,  } from "./style";
import { ITopicInfos } from '../../interfaces/Topics';

type CreateTopicProps = {
  setNewTopic: React.Dispatch<React.SetStateAction<ITopicInfos>>
}

function CreateTopic ({ setNewTopic }: CreateTopicProps) {
  const topicTitle = useRef(null)
  const topicContent = useRef(null)

  function sendNewTopicSubmit(event: Event) {
    event.preventDefault()

    setNewTopic({
      id: uuidv4(),
      topicTitle: topicTitle.current.value,
      topicDescription: topicContent.current.value,
      avatar_infos: {
        avatarSourceLink:"https://freepngimg.com/thumb/mario_bros/92438-mario-art-super-thumb-bros-download-free-image.png",
        avatarAltTitle: "avatar_alt_title",
        avatarTitle: "avatar_title"
      }
    })
  }

  return (
    <Container>
      <h2>Novo Tópico</h2>
      <NewTopicForm onSubmit={() => sendNewTopicSubmit}>
        <NewTopicTitle ref={topicTitle} type="text" placeholder="Mostre o que você está pensando!"/>
        <NewTopicContent ref={topicContent} placeholder="Mostre mais detalhes!"/>
        <NewTopicButton type="submit">Criar Tópico</NewTopicButton>
      </NewTopicForm>
    </Container>
  )
}

export default CreateTopic ;