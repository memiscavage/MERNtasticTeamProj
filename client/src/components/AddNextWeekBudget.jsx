import { addNextWeekBudget } from "../../dummyTest/dummyRoutes";
import { useState } from "react";

function AddNextWeekBudget({ currentID, nextWeekDate}) {
  const [totalBudget, setTotalBudget] = useState(0);
  const onSubmit = () => {
    addNextWeekBudget({
      userID: currentID,
      date: nextWeekDate,
      totalBudget: totalBudget,
    });
  };
  // if you only have access to the current date, a function will 
  // need to be created to calculate the next week date
  return (
    <div className="addNextWeekBudget">
      <h2>Next Week</h2>
      <div>
        <label>My budget will be:</label>
        <input onChange={(e) => setTotalBudget(e.target.value)} type="number" placeholder="0"></input>
      </div>
      <button onClick={onSubmit} disabled={!nextWeekDate} className="nextWeekSubmit">Submit</button>
    </div>
  );
}

export default AddNextWeekBudget;