import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.sass';

function Dashboard({ mode, cursorOO, cursorOK, eslatmas, odatlar }) {

    const card1Ref = useRef(null);

    const card1Position = (e) => {
        if (card1Ref.current) {
            const box = card1Ref.current.getBoundingClientRect();

            setCard1X(e.clientX - (box.left + box.width / 2))
            setCard1Y(e.clientY - (box.top + box.height / 2))
        }
    };

    const [card1X, setCard1X] = useState(0)
    const [card1Y, setCard1Y] = useState(0)

    const card2Ref = useRef(null);

    const card2Position = (e) => {
        if (card2Ref.current) {
            const box = card2Ref.current.getBoundingClientRect();

            setCard2X(e.clientX - (box.left + box.width / 2))
            setCard2Y(e.clientY - (box.top + box.height / 2))
        }
    };

    const [card2X, setCard2X] = useState(0)
    const [card2Y, setCard2Y] = useState(0)

    const card3Ref = useRef(null);

    const card3Position = (e) => {
        if (card3Ref.current) {
            const box = card3Ref.current.getBoundingClientRect();

            setCard3X(e.clientX - (box.left + box.width / 2))
            setCard3Y(e.clientY - (box.top + box.height / 2))
        }
    };

    const [card3X, setCard3X] = useState(0)
    const [card3Y, setCard3Y] = useState(0)

    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('local_todos');
        return saved ? JSON.parse(saved) : [];
    });

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem('local_todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            isCompleted: false
        };

        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        const updated = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        setTodos(updated);
    };

    const deleteTodo = (id) => {
        const filtered = todos.filter(todo => todo.id !== id);
        setTodos(filtered);
    };

    const pBtn = useRef(null);

    const pBtnPosition = (e) => {
        if (pBtn.current) {
            const box = pBtn.current.getBoundingClientRect();

            setPBtnX(e.clientX - (box.left + box.width / 2))
            setPBtnY(e.clientY - (box.top + box.height / 2))
        }
    };

    const [PBtnX, setPBtnX] = useState(0)
    const [PBtnY, setPBtnY] = useState(0)

    return (
        <>
            <div className="dashboardCards">
                <div className="dashboardCardContainer" ref={card1Ref} onMouseLeave={() => { setCard1X(0), setCard1Y(0) }} onMouseMove={(e) => { card1Position(e) }}>
                    <div className="dashboardCard" style={{ transform: `translate(${card1X}px, ${card1Y}px)`, background: `${mode === 'dark' ? '#2c2c2c54' : '#ffffff54'}` }}>
                        <p className="dashboardItem">odatlar</p>
                        <div className="dashboardCardNum">{odatlar.length}</div>
                    </div>
                </div>
                <div className="dashboardCardContainer" ref={card2Ref} onMouseLeave={() => { setCard2X(0), setCard2Y(0) }} onMouseMove={(e) => { card2Position(e) }}>
                    <div className="dashboardCard" style={{ transform: `translate(${card2X}px, ${card2Y}px)`, background: `${mode === 'dark' ? '#2c2c2c54' : '#ffffff54'}` }}>
                        <div className="dashboardItem">vazifalar</div>
                        <div className="dashboardCardNum">{todos.length}</div>
                    </div>
                </div>
                <div className="dashboardCardContainer" ref={card3Ref} onMouseLeave={() => { setCard3X(0), setCard3Y(0) }} onMouseMove={(e) => { card3Position(e) }}>
                    <div className="dashboardCard" style={{ transform: `translate(${card3X}px, ${card3Y}px)`, background: `${mode === 'dark' ? '#2c2c2c54' : '#ffffff54'}` }}>
                        <div className="dashboardItem">eslatmalar</div>
                        <div className="dashboardCardNum">{eslatmas.length}</div>
                    </div>
                </div>
            </div>
            <div className="todoContainer" style={{ background: `${mode === 'dark' ? '#2c2c2c54' : '#ffffff54'}` }}>
                <h2>Bugungi vazifalar</h2>

                <form onSubmit={handleAddTodo} className="todoForm">
                    <input className="todoInput"
                        style={{ color: `${mode === 'dark' ? '#fff' : '#000'}` }}
                        type="text"
                        placeholder="vazifa..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="todoButtonContainer" ref={pBtn} onMouseLeave={() => { setPBtnX(0), setPBtnY(0), cursorOK() }} onMouseMove={(e) => { pBtnPosition(e) }} onMouseEnter={cursorOO}>
                        <button className="todoButton" style={{ transform: `translate(${PBtnX}px, ${PBtnY}px)`, color: `${mode === 'dark' ? '#fff' : '#000'}` }}>+</button>
                    </button>
                </form>

                <ul className="todoList">
                    {todos.map((todo) => (
                        <li key={todo.id} className="todoItem" style={{ margin: '10px 0', listStyleType: 'none' }}>
                            <label className="checkName" htmlFor={todo.id}>

                                <div className='todoText'>{todo.text}</div>

                                <input className="todoCheckbox"  id={todo.id}
                                    type="checkbox"
                                    checked={todo.isCompleted}
                                    onChange={() => toggleTodo(todo.id)}
                                />

                                <span className="customCheckbox"></span>
                            </label>

                            <button className='deleteTodoButtonContainer' onClick={() => deleteTodo(todo.id)} onMouseEnter={cursorOO} onMouseLeave={cursorOK}>
                                <button className="deleteTodoButton">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 26 26"><path fill="#ff0000b9" d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593h-3zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1V8zm2 2v12h2V10H8zm4 0v12h2V10h-2zm4 0v12h2V10h-2z" /></svg>
                                </button>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Dashboard;