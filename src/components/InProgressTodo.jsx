import { useEffect, useState } from "react"
import { Button, Card, Form } from "react-bootstrap"
import { updateTodo } from "../utils/fetch_api_funcs"
import { useDispatch } from 'react-redux';
import { editTodo } from '../store/todoSlice';

export const InProgressTodo = (props) => {
  const dispatch = useDispatch()

  const [notesText, setNotesText] = useState('')

  useEffect(() => {
    setNotesText(props.inProgressTodo.notes)
  }, [props.inProgressTodo.notes])

  // const updateNotes = (e) => {
  //   e.preventDefault()
  //   updateTodo({...props.inProgressTodo, notes: notesText})
  // }

  const updateNotes = (e) => {
    e.preventDefault()
    dispatch(editTodo({...props.inProgressTodo, notes: notesText}))
  }

  const onChangeToComplete = (changingTodo) => {
    dispatch(editTodo({...changingTodo, status: 'complete'}))
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Todo: {props.inProgressTodo.text}</Card.Title>
        <Card.Subtitle>Status: {props.inProgressTodo.status}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Label>Notes: {' '}</Form.Label>
          <Form.Control
            type='text'
            as='textarea'
            placeholder='Notes for task...'
            onChange={(e) => setNotesText(e.target.value)}
            value={notesText}
            style={{marginBottom: 8}}
          />
          <Button onClick={updateNotes}>Update Notes</Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        {/* <Button onClick={()=> props.onChangeToComplete(props.inProgressTodo)}>Change To Complete</Button> */}
        <Button onClick={()=> onChangeToComplete(props.inProgressTodo)}>Change To Complete</Button>
      </Card.Footer>
    </Card>
  )
}
