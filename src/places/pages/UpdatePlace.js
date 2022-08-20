import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire states Building",
    description: "a tall building",
    imageUrl:
      "https://www.urbansplatter.com/wp-content/uploads/2014/07/Empire-State-Building-2013.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lang: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire states Building",
    description: "a tall building",
    imageUrl:
      "https://www.urbansplatter.com/wp-content/uploads/2014/07/Empire-State-Building-2013.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lang: -73.9878584,
    },
    creator: "u2",
  },
];

function UpdatePlace() {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler] =useForm(
    {
      title: { value: identifiedPlace.title, isValid: true },
      description: { value: identifiedPlace.description, isValid: true },
    },
    true
  );

  function placeUpdateSubmitHandler(e) {
    e.preventDefault();
    console.log(formState.inputs);
  } 

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
}

export default UpdatePlace;
