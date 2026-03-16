import { useTodos } from '../hooks/useTodos'
import Todoitem from './Todoitem'

function TodoList() {
    const { todos, deleteTodo, toggleChecked } = useTodos()

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <Todoitem todo={todo} deleteTodo={deleteTodo} toggleChecked={toggleChecked}></Todoitem>
                ))}
            </ul>
        </>
    )
}

export default TodoList
