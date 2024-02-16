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
    })
    .catch(error => console.error(error));
    
  return datas;
};

const getUserScore = (userId) => {
  const datas = fetchUserInfos(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.todayScore || data.data.score;
    })
    .catch(error => console.error(error));

  return datas;
};

const getUserResume = (userId) => {
  const datas = fetchUserInfos(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.keyData;
    })
    .catch(error => console.error(error));

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
    })
    .catch(error => console.error(error));

    return datas;
};

const getUserAverageSessions = (userId) => {
  const datas = fetchUserAverageSessions(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.sessions.map((e) => {
        return e.sessionLength;
      });
    })
    .catch(error => console.error(error));

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
        .map((e) => {
          return {
            kind: kinds[e.kind - 1],
            value: e.value
          };
        });

      return sortedPerfDatas
    })
    .catch(error => console.error(error));

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
