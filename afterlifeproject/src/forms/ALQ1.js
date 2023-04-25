import { NavLink, Route, Routes } from "react-router-dom"
import ALQ2 from "./ALQ2"
import { connect } from "react-redux"
import { radioChange } from "../FormState/actionCreators"


const ALQ1 = (props) => {
const {radioChange} = props
const handleChange = (e) => {
radioChange(e.target.name, e.target.value)
}
    return (
        <div className="App">
            <form>
                <div>
                    <p>Question 1:</p>
                    <label>
                        <input type="radio"  name="Question1" value="option1" onChange={handleChange}/>
                        Option 1
                    </label>
                    <label>
                        <input type="radio"  name="Question1" value="option2" onChange={handleChange} />
                        Option 2
                    </label>
                    <label>
                        <input type="radio"  name="Question1" value="option3" onChange={handleChange} />
                        Option 3
                    </label>
                </div>

            </form>

            <nav>
                <NavLink to="2"><button>NEXT</button></NavLink>&nbsp;
            </nav>
        
        </div>

    )
}

export default connect(mstp=>mstp, {radioChange}) (ALQ1)