import { Button, Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { editTodo } from "../store/todoSlice"

export const NewTodo = (props) => {
  const dispatch = useDispatch()

  const onChangeToInProgress = (changingTodo) => {
    dispatch(editTodo({...changingTodo, status: 'inProgress'}))
  }

  return (
    <Card border='primary' style={{margin: 8}}>
      <Card.Header>
        <Card.Title>Todo: {props.newTodo.text}</Card.Title>
        <Card.Subtitle>Status: {props.newTodo.status}</Card.Subtitle>
      </Card.Header>
      <Card.Footer>
        {/* <Button onClick={() => props.onChangeToInProgress(props.newTodo)}>Change to InProgress</Button> */}
        <Button onClick={() => onChangeToInProgress(props.newTodo)}>Change to InProgress</Button>
      </Card.Footer>
    </Card>
  )
}
