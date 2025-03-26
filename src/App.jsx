import './App.css';
import Card from "./Card.jsx";
import Spline from '@splinetool/react-spline';
import { useState } from "react";

export default function App() {

  const [schedule, setSchedule] = useState([])
  const [day, setDay] = useState("")

  const [cards, setCards] = useState([
    { id: 1, image: "card-1.svg", title: "Monday", text: "This is monday's schedule" },
    { id: 2, image: "card-2.svg", title: "Tuesday", text: "This is tuesday's schedule" },
    { id: 3, image: "card-3.svg", title: "Wednesday", text: "This is wednesday's schedule" },
    { id: 4, image: "card-4.svg", title: "Thursday", text: "This is thursday's schedule" },
    { id: 5, image: "card-5.svg", title: "Friday", text: "This is friday's schedule" },
    { id: 6, image: "card-6.svg", title: "Saturday", text: "This is saturday's schedule" },
    { id: 7, image: "card-1.svg", title: "Sunday", text: "REST DAY" }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.title.toLowerCase() === day.toLowerCase() ? { ...card, text: schedule } : card
      )
    );

    setDay("");
    setSchedule(""); // Clear input field
  };

  return (
    <>
      <div>
        <Spline scene="https://prod.spline.design/yXJY9XeejGtOUJeT/scene.splinecode" />
        <Card cards={cards} />
      </div>

      <div>
        <form className="container-input" onSubmit={handleSubmit}>
          <label className="label" htmlFor="schedule">Schedule:</label>
          <input className="input-box"
            type="text"
            id="schedule"
            name="schedule"
            value={schedule}
            onChange={e => setSchedule(e.target.value)}
          />
          <label className="label" htmlFor="day">Day:</label>
          <input className="input-box"
          type="text" 
          id="day" 
          name="day" 
          value={day} 
          onChange={e => setDay(e.target.value)}/>
          <button className="add-button" type="add">Add</button>
        </form>
      </div>
    </>
  );
}