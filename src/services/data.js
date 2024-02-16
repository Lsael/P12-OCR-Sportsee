import {
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserInfos,
  fetchUserPerformance,
} from "./fetch.js";

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from "./mock.js"

const getUserInfos = async (userId) => {
  if(process.env.REACT_APP_ENV === "dev") {
    const index = USER_MAIN_DATA.findIndex((e) => e.id == userId)
    if(index === -1) {
      return {error: true}
    } else {
      return USER_MAIN_DATA[index].userInfos
    }
  } else {
    const datas = fetchUserInfos(userId)
      .then((res) => res.json())
      .then((data) => {
        return data.data.userInfos;
      })
      .catch(error => {
        return({error:error})});
      
    return datas;
  }
};

const getUserScore = (userId) => {
  const datas = fetchUserInfos(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.todayScore || data.data.score;
    })
    .catch(error => {
      return({error:error})});

  return datas;
};

const getUserResume = (userId) => {
  const datas = fetchUserInfos(userId)
    .then((res) => res.json())
    .then((data) => {
      return data.data.keyData;
    })
    .catch(error => {
      return({error:error})});

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
    .catch(error => {
      return({error:error})});

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
    .catch(error => {
      return({error:error})});

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
    .catch(error => {
      return({error:error})});

  return datas;
};

const handleError = () => {
  return(
    <div className="graph-error graph">
      <span>Une erreur est survenue, veuillez reessayer plus tard</span>
    </div>
  )
}

export {
  getUserInfos,
  getUserScore,
  getUserResume,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
  handleError
};
