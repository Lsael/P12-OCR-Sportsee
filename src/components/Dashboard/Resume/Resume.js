import styles from "./Resume.module.scss";
import caloriesIcon from "../../../assets/calories.png";
import proteinesIcon from "../../../assets/proteines.png";
import glucidesIcon from "../../../assets/glucides.png";
import lipidesIcon from "../../../assets/lipides.png";
import { handleError } from "../../../services/data";

const titleInfos = [
  {
    title: "Calories",
    icon: caloriesIcon,
    unit: "kCal",
  },
  {
    title: "Proteines",
    icon: proteinesIcon,
    unit: "g",
  },
  {
    title: "Glucides",
    icon: glucidesIcon,
    unit: "g",
  },
  {
    title: "Lipides",
    icon: lipidesIcon,
    unit: "g",
  },
];

const Resume = (props) => {
  if (props.resume.error) {
    return handleError();
  }
  
  return (
    <div className={styles.Resume}>
      {Object.keys(props.resume).map((element, index) => (
        <div key={`resumeId${index}`} className={styles.Resume__Element}>
          <img
            src={titleInfos[index].icon}
            alt={titleInfos[index].title}
            className={styles.Resume__Icon}
          />
          <div>
            <span className={styles.Resume__Data}>
              {props.resume[element] + titleInfos[index].unit}
            </span>
            <span className={styles.Resume__Title}>
              {titleInfos[index].title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resume;
