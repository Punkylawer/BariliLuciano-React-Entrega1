import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";


export default function CartWidget() {

    return (
        <div>
        <FontAwesomeIcon icon={faCartShopping} />
        0
        </div>
    )
} 