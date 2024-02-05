import {
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserInfos,
  fetchUserPerformance,
} from "./fetch.js";

const getUserInfos = (userId) => {
  const datas = fetchUserInfos(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.userInfos;
    });
  return datas;
};

const getUserScore = (userId) => {
  const datas = fetchUserInfos(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.todayScore;
    });
  return datas;
};

const getUserResume = (userId) => {
  const datas = fetchUserInfos(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.keyData;
    });
  return datas;
};

const getUserActivity = (userId) => {
  const datas = fetchUserActivity(userId)
    .then((res) => res.json())
    .then((data) => {
      let formattedDatas = [];

      data.data.sessions.forEach((element) => {
        const day = new Date(element.day).getDate();

        formattedDatas.push({
          name: day,
          calories: element.calories,
          kilogram: element.kilogram,
        });
      });

      return formattedDatas;
    });
    console.log(datas);
    return datas;
};

const getUserAverageSessions = (userId) => {
  const datas = fetchUserAverageSessions(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.sessions.map((e) => {
        return e.sessionLength;
      });
    });
  return datas;
};

const getUserPerformance = (userId) => {
  const datas = fetchUserPerformance(userId)
    .then((res) => res.json())
    .then((data) => {
      let kinds = Object.keys(data.data.kind).map((e) => {
        return data.data.kind[e][0].toUpperCase() + data.data.kind[e].slice(1);
      });
      let sortedPerfDatas = data.data.data
        .sort((a, b) => a.kind - b.kind)
        .map((e) => {
          return e.value;
        });

      return {
        kinds: kinds,
        datas: sortedPerfDatas,
      };
    });
  return datas;
};

export {
  getUserInfos,
  getUserScore,
  getUserResume,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
