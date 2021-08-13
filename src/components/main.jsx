import React, { useEffect, useState } from "react";
import Card from "./card";
import Input from "./input";
import { colorsApi } from "../services/colorsApi";

const Main = () => {
  const [category, setCategory] = useState("");
  const [api, setApi] = useState([]);
  const [backGround, setBackGround] = useState("");

  useEffect(() => {
    setApi(colorsApi);
  }, []);

  return (
    <div className="main-container">
      <Card backGround={backGround} category={category} />
      <Input
        api={api}
        setCategory={setCategory}
        setBackGround={setBackGround}
      />
    </div>
  );
};

export default Main;
