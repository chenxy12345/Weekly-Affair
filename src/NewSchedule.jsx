export default function NewSchedule({ onSubmit }) {

    const [schedule, setSchedule] = useState("")
    const [day, setDay] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        if (day === "" || schedule === "") return 

        onSubmit(day, schedule)

        setSchedule("")
        setDay("")
    }


    return (
        <div>
            <form className="container-input" onSubmit={handleSubmit}>
                <label className="label" htmlFor="schedule">Schedule:</label>
                <input 
                    className="input-box"
                    type="text"
                    id="schedule"
                    value={schedule}
                    onChange={e => setSchedule(e.target.value)}
                />
                <button className="add-button" type="submit">Add</button>
            </form>
        </div>
    );
}