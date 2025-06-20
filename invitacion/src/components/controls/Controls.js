import React from "react";
import "./control.css";

export const Controls = () => {
  const openGoogleMaps = () => {
    const url =
      "https://maps.app.goo.gl/GSW9uir4AEPZcERg9";
    window.open(url, "_blank");
  };

  const random01 = (ran01, ran02) => {
    const valor01=ran01 - ran02
    let num1 = Math.floor(Math.random() * 1000);
    let num2 = Math.floor(Math.random() * 1000);
    let resultado =
      num1 * 2 + num2 * 3 + (valor01 - (num1 * 2 + num2 * 3));
    return resultado;
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = `${random01(10000, 3838)}${random01(15000 , 8274)}`;
    const message = "Confirmo mi asistencia al evento";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="controls-container">
      {/* <button className="control-button" onClick={sendWhatsAppMessage}>
        Confirmar Asistencia
      </button> */}
      <button className="control-button" onClick={openGoogleMaps}>
        Ubicacion
      </button>
    </div>
  );
};
