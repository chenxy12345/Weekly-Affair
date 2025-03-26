import ScheduleItem from "./ScheduleItem.jsx"

export default function ScheduleList({ schedule, onToggle, handleDelete }) {

    return (
        <ol>
            {schedule.length === 0 && <p>No Schedule for today.</p>}
            {schedule.map(item => {
                return <ScheduleItem key={item.id} {...item}
                onToggle={onToggle}
                handleDelete={handleDelete} />
            })}
        </ol>
    )
}