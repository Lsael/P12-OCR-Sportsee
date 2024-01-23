import styles from './Title.module.scss';

const Title = (props) => {
  return (
    <div className={styles.Title}>
      <h2>Bonjour <span>{props.firstName}</span></h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
    </div>
  );
}

export default Title;
