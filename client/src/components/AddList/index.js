import React, { useState } from "react";

import Button from "./Buttom;
import axios from "axios"
import "./AddList.css";

const AddList = ({handleListAddition, addList}) => {
    const [inputData, setInputData] = useState("");


    const handleInputChange = (e) => {

        setInputData(e.target.value);
    };

    const handleAddListClick = () => {
        const dados = {title: inputData};
        axios.post('http://localhost:8080/Lists', dados)


        handleListAddition(inputData);
        setInputData("");
    };

    return (
        <div className="add-list-container">
            <input
                onChange={handleInputChange}
                value={inputData}
                className="add-list-input"
                type="text"
            />
            ;
            <div className="add-list-button-container">
                <Button onClick={handleAddListClick}>Adicionar</Button>
            </div>
        </div>
    );
};

export default AddList;