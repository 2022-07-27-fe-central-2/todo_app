import {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todosSlice';

export const CreateTodoForm = () => {

  const dispatch = useDispatch()

  const [todoText, setTodoText] = useState('')

  const submitNewTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      text: todoText,
      notes: '',
      status: 'new'
    }
    dispatch(addTodo(newTodo))
    setTodoText('')
  }

  return (
    <Form style={{display: 'flex'}}>
      <Form.Control
        type='text'
        size='sm'
        onChange={(e) => setTodoText(e.target.value)}
        placeholder='Todo task...'
        value={todoText}
      />
      <Button onClick={submitNewTodo}>Submit</Button>
    </Form>
  )
}
