import TodoList from './component/TodoList'
import TodoWriteForm from './component/TodoWriteForm'
import { useTodos } from './hooks/useTodos'

function App() {
    const { addTodo, todos, deleteTodo, toggleChecked } = useTodos()

    return (
        <>
            <TodoWriteForm></TodoWriteForm>
            <TodoList></TodoList>
        </>
    )
}

export default App
