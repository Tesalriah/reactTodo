import TodoList from './component/TodoList'
import TodoWriteForm from './component/TodoWriteForm'
import { useTodos } from './hooks/useTodos'

function App() {
    const { addTodo, todos, deleteTodo, toggleChecked } = useTodos()

    return (
        <>
            <TodoWriteForm addTodo={addTodo}></TodoWriteForm>
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleChecked={toggleChecked}></TodoList>
        </>
    )
}

export default App
