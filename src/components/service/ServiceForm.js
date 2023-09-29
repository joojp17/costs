import { useState } from "react";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

import styles from "../project/css/ProjectForm.module.css";

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: "",
    cost: "",
    description: "",
  });

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
    setInputValue({
      name: "",
      cost: "",
      description: "",
    });
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handlerOnChange={handleChange}
        value={inputValue.name}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handlerOnChange={handleChange}
        value={inputValue.cost}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handlerOnChange={handleChange}
        value={inputValue.description}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
