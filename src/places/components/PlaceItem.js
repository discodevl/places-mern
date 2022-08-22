import { useContext, useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import styles from "./PlaceItem.module.css";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../context/auth-context";

function PlaceItem({
  id,
  image,
  title,
  description,
  address,
  creatorId,
  coordinates,
}) {
  const authCtx = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  function openMapHandler() {
    setShowMap(true);
  }
  function closeMapHandler() {
    setShowMap(false);
  }

  function showDeleteWarningHandler() {
    setShowConfirmModal(true);
  }
  function cancelDeleteWarningHandler() {
    setShowConfirmModal(false);
  }
  function confirmDeleteHandler() {
    setShowConfirmModal(false);
    console.log("delete");
  }

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass={styles["place-item__modal-content"]}
        footerClass={styles["place-item__modal-actions"]}
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className={styles["map-container"]}>
          <Map center={coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteWarningHandler}
        header="are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteWarningHandler}>
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
          </>
        }
      >
        <p>delete?</p>
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
            <Button inverse onClick={openMapHandler}>
              View on Map
            </Button>
            {authCtx.isLoggedIn && <Button to={`/places/${id}`}>Edit</Button>}
            {authCtx.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}>
              Delete
            </Button>}
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
