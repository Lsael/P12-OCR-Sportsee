import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout.js";
import styles from "./Dashboard.module.scss";
import Title from "./Title/Title.js";
import Resume from "./Resume/Resume.js";
import DailyActivity from "./graphs/DailyActivity/DailyActivity.js";
import AverageSession from "./graphs/AverageSession/AverageSession.js";
import Intensity from "./graphs/Intensity/Intensity.js";
import Score from "./graphs/Score/Score.js";
import {
  getUserActivity,
  getUserAverageSessions,
  getUserInfos,
  getUserPerformance,
  getUserResume,
  getUserScore,
} from "../../services/data.js";

const Dashboard = () => {
  const userId = process.env.REACT_APP_USER_ID;

  const [firstName, setFirstname] = useState("");
  const [dailyActivity, setDailyActivity] = useState({});
  const [averageSession, setAverageSession] = useState([]);
  const [intensity, setIntensity] = useState({});
  const [score, setScore] = useState({});
  const [resume, setResume] = useState({});

  useEffect(() => {
    getUserInfos(userId).then((res) => setFirstname(res.firstName));
    getUserActivity(userId).then((res) => setDailyActivity(res));
    getUserAverageSessions(userId).then((res) => setAverageSession(res));
    getUserPerformance(userId).then((res) => setIntensity(res));
    getUserScore(userId).then((res) => setScore(res));
    getUserResume(userId).then((res) => setResume(res));
  }, []);

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
