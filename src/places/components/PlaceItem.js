import React from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from '../../shared/components/FormElements/Button';
import styles from "./PlaceItem.module.css";

function PlaceItem({
  id,
  image,
  title,
  description,
  address,
  creatorId,
  coordinates,
}) {
  return (
    <li className={styles["place-item"]}>
      <Card className={styles['place-item__content']}>
        <div className={styles["place-item__image"]}>
          <img src={image} alt={title} />
        </div>
        <div className={styles["place-item__info"]}>
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className={styles["place-item__actions"]}>
          <Button inverse>View on Map</Button>
          <Button to={`/places/${id}`}>Edit</Button>
          <Button danger >Delete</Button>
        </div>
      </Card>
    </li>
  );
}

export default PlaceItem;
