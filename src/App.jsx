import TodoList from './component/TodoList'
import TodoWriteForm from './component/TodoWriteForm'
import { useTodos } from './hooks/useTodos'

function App() {
    const { addTodo, todos, deleteTodo, toggleChecked } = useTodos()

    return (
        <div className="flex flex-col">
            <TodoWriteForm></TodoWriteForm>
            <TodoList></TodoList>
        </div>
    )
}

export default App
