import { Button, Card } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { removeTodo } from "../store/todoSlice"

export const CompletedTodo = (props) => {
  const dispatch = useDispatch()

  const onDeleteTodo = (completedTodoId) => {
    dispatch(removeTodo(completedTodoId))
  }

  return (
    <Card border='primary' style={{margin: 8}}>
      <Card.Header>
        <Card.Title>Todo: {props.completedTodo.text}</Card.Title>
        <Card.Subtitle>Status: {props.completedTodo.status}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>Notes: {props.completedTodo.notes}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {/* <Button onClick={() => props.onDeleteTodo(props.completedTodo.id)}>Delete Todo</Button> */}
        <Button onClick={() => onDeleteTodo(props.completedTodo.id)}>Delete Todo</Button>
      </Card.Footer>
    </Card>
  )
}
