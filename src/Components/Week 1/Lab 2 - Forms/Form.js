import {useState} from "react";

const Form = () =>{

  const [score,setScore] = useState();

  return (
    <div>
      <form>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="Field">
            <label>Score: </label>
            <input type="range" min="0" max="10" value={score} onChange={e => setScore(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Form;