import React from "react";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [contadorValue, actualizarContador] = useState(initial);

    return (
        <div className="container">
            <div className="row">
                <button
                    className="btn btn-primary col-2"
                    onClick={() => {
                        if (contadorValue < stock)
                            actualizarContador(contadorValue + 1)
                    }}
                >
                    +
                </button>
                <input type="text" className="col-8" style={{ textAlign: "center", fontSize: "20px" }} value={contadorValue} readOnly/>
                <button
                    className="btn btn-danger col-2"
                    onClick={() => {
                        if (contadorValue > 1)
                            actualizarContador(contadorValue - 1);
                    }}
                >
                    -
                </button>
            </div>
            <button
                className="btn btn-success"
                style={{ marginTop: "5px" }}
                onClick={() => {
                    onAdd(contadorValue);
                }}
            >Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;