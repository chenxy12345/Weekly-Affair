export default function ScheduleItem({ id, text, completed, onToggle, handleDelete }) {
    return (
        <li>
            <input type="checkbox" 
            checked={completed}
            onChange={e => onToggle(id, e.target.checked)} />
            <span>{text}</span>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    )
}