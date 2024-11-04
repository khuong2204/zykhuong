export const TodoList = (props) => {
    const todoList = props.data;
    const toggleCheck = props.toggleCheck;


    return (
        <ul id="myUL">
            {
                todoList.map((item, index) => (
                    <li
                        key={index}
                        className={item.checked ? 'checked' : ''}
                        onClick={() => toggleCheck(index)}
                    >
                        {item.title}
                    </li>
                ))
            }
        </ul>
    );
}