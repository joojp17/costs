import styles from '../project/css/ProjectCard.module.css'

import {BsFillTrashFill} from 'react-icons/bs'

function ServiceCard({service, handleRemove}){

  const {id, name, cost, description} = service;

  const remove = (e)=>{

  }

  return(
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill/> Excluir
        </button>
      </div>
    </div>
  )
}

export default ServiceCard