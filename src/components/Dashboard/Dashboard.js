import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout.js";
import styles from "./Dashboard.module.scss";
import Title from "./Title/Title.js";
import Resume from "./Resume/Resume.js";
import DailyActivity from "./graphs/DailyActivity/DailyActivity.js";
import AverageSession from "./graphs/AverageSession/AverageSession.js";
import Intensity from "./graphs/Intensity/Intensity.js";
import Score from "./graphs/Score/Score.js";
import { UserDatas } from "../../services/data.js";

const Dashboard = () => {
  const userId = process.env.REACT_APP_USER_ID;
  
  const [firstName, setFirstname] = useState("");
  const [dailyActivity, setDailyActivity] = useState({});
  const [averageSession, setAverageSession] = useState([]);
  const [intensity, setIntensity] = useState({});
  const [score, setScore] = useState({});
  const [resume, setResume] = useState({});
  
  useEffect(() => {
    const userDatas = new UserDatas(userId);

    userDatas.getUserInfos().then((res) => setFirstname(res.firstName));
    userDatas.getUserActivity().then((res) => setDailyActivity(res));
    userDatas.getUserAverageSessions().then((res) => setAverageSession(res));
    userDatas.getUserPerformance().then((res) => setIntensity(res));
    userDatas.getUserScore().then((res) => setScore(res));
    userDatas.getUserResume().then((res) => setResume(res));
  }, [userId]);

  return (
    <Layout>
      <div className={styles.Dashboard}>
        <section className={styles.main}>
          <Title firstName={firstName} />
          <div className={styles.graphs}>
            <DailyActivity dailyActivity={dailyActivity} />
            <div className={styles.details}>
              <AverageSession averageSession={averageSession} />
              <Intensity intensity={intensity} />
              <Score score={score} />
            </div>
            <Resume resume={resume} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
