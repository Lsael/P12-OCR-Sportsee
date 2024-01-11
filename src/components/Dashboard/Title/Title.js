import React, { useState } from 'react';
/* import UserDatas from '../../../services/data'; */
import styles from './Title.module.scss';
import { getUserInfos } from '../../../services/data.js'

const Title = () => {
  const [firstName, setFirstname] = useState("")
  getUserInfos("12").then(res => setFirstname(res.firstName))
/*   const userDatas = new UserDatas("12")
  userDatas.getUserInfos()
    .then(res => setFirstname(res.firstName)) */

  return (
    <div className={styles.Title}>
      <h2>Bonjour <span>{firstName}</span></h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
    </div>
  );
}

export default Title;
