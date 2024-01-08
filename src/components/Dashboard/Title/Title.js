import React, { useState } from 'react';
import UserDatas from '../../../services/data';
import styles from './Title.module.scss';

const Title = () => {
  const [firstName, setFirstname] = useState("")
  const userDatas = new UserDatas("12")
  userDatas.getUserInfos()
    .then(res => setFirstname(res.firstName))
    
  return (
    <div className={styles.Title}>
      <p>Bonjour, {firstName}</p>
    </div>
  );
}

export default Title;
