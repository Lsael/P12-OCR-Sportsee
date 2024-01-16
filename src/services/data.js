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

const getUserActivity = (userId) => {
  const datas = fetchUserActivity(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.sessions;
    });
  return datas;
};

const getUserAverageSessions = (userId) => {
  const datas = fetchUserAverageSessions(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.sessions;
    });
  return datas;
};

const getUserPerformance = (userId) => {
  const datas = fetchUserPerformance(userId)
    .then((res) => res.json())
    .then((data) => {
      return {
        kind: data.data.kind,
        data: data.data.data,
      };
    });
  return datas;
};

export {
  getUserInfos,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
