import { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import styles from "./PlaceItem.module.css";
import Map from "../../shared/components/UIElements/Map";

function PlaceItem({
  id,
  image,
  title,
  description,
  address,
  creatorId,
  coordinates,
}) {
  const [showMap, setShowMap] = useState(false);

  function openMapHandler() {
    setShowMap(true);
  }
  function closeMapHandler() {
    setShowMap(false);
  }

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass={styles["place-item__modal-content"]}
        footerClass={styles['place-item__modal-actions']}
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className={styles['map-container']}>
          <Map center={coordinates} zoom={16} />
        </div>
      </Modal>
      <li className={styles["place-item"]}>
        <Card className={styles["place-item__content"]}>
          <div className={styles["place-item__image"]}>
            <img src={image} alt={title} />
          </div>
          <div className={styles["place-item__info"]}>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className={styles["place-item__actions"]}>
            <Button inverse onClick={openMapHandler}>View on Map</Button>
            <Button to={`/places/${id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
