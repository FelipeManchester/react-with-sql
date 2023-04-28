import { useEffect, useState } from "react";
import Axios from "axios";
import Cards from "./Cards";

const Home = () => {
  const [values, setValues] = useState();
  const [listData, setListData] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleData = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then(() => {
      setListData([
        ...listData,
        {
          name: values.name,
          cost: values.cost,
          category: values.category,
        },
      ]);
    });
  };

  const handleClick = () => {
    handleData();
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((res) => {
      setListData(res.data);
    });
  }, [listData]);

  return (
    <main className="container">
      <div className="register">
        <h1>Kavod Store</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="cost"
          placeholder="Preço"
          className="input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="input"
          onChange={handleChangeValues}
        />
        <button onClick={handleClick}>Cadastrar</button>
      </div>
      <div>
        <em>Clique em um título para editar</em>
        {listData?.map((value) => (
          <Cards
            key={value.idbooks}
            listData={listData}
            setListData={setListData}
            id={value.idbooks}
            name={value.name}
            cost={value.cost}
            category={value.category}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
