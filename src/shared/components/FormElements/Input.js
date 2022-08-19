import { useReducer, useEffect } from "react";
import { validate } from "../../util/validators";
import "./Input.css";

function inputReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH': {
        return {
            ...state,
            isTouched: true
        }
    }
    default:
      return state;
  }
}

function Input({
  id,
  label,
  type,
  element,
  placeholder,
  rows,
  errorText,
  validators,
  onInput
}) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid)
  }, [id, onInput, inputState])

  function changeHandler(e) {
    dispatch({ type: "CHANGE", val: e.target.value, validators: validators });
  }

  function touchHandler() {
    dispatch({type: 'TOUCH'})
  }

  const elementInput =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {elementInput}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
}

export default Input;
