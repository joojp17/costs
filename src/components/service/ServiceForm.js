import { useState } from "react";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

import styles from "../project/css/ProjectForm.module.css";

function ServiceForm({handleSubmit, btnText, projectData}) {
  function submit(e) {}

  function handleChange(e) {}

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handlerOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handlerOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handlerOnChange={handleChange}
      />
      <SubmitButton text={btnText}/>
    </form>
  );
}

export default ServiceForm;
