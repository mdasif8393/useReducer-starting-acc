import React, { useReducer } from "react";
import { initialState, reducer } from "../state/formReducer";
import { actionTypes } from "../state/actionTypes";

const LongForm = () => {
  
//come from state folder fromReducer.js file
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    console.log(state);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onBlur={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onBlur={(e) =>
              dispatch({
                type: actionTypes.TOGGLE,
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <h1>Gender</h1>
          <div>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label for="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label for="female">Female</label>
            </div>
            <div>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label for="other">Other</label>
            </div>
          </div>
        </div>
        <div>
          <label for="education">Education</label>
          <select
            name="education"
            id="education"
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="underGrad">Under Graduate</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>
        <div>
          <label>Number of PCs</label>
          <div>
            <button>-</button>
            <div>
              <span>0</span>
            </div>
            <button>+</button>
          </div>
        </div>
        <div>
          <label for="feedback">Feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="4"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          ></textarea>
        </div>

        <div>
          <div className="flex  w-full max-w-xs">
            <input className="mr-3" type="checkbox" name="term" id="terms" 
            onClick={()=> dispatch({type: "TOGGLE"})}
            />
            <label for="terms">I agree to terms and conditions</label>
          </div>
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
            disabled={!state.term}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LongForm;
