
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useTodos } from './hooks/useTodos'
import List from './pages/List'
import Form from './pages/Form'
import Main from './pages/Main'

function App() {
    const { addTodo, todos, deleteTodo, toggleChecked } = useTodos()

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}></Route>
                <Route path="/list" element={<List />}></Route>
                <Route path="/new" element={<Form/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
