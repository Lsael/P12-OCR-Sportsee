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
  USER_PERFORMANCE,
} from "./mock.js";

export class UserDatas {
  constructor(userId) {
    this.userId = userId;
  }

  async getUserInfos() {
    if (process.env.REACT_APP_ENV === "dev") {
      const index = USER_MAIN_DATA.findIndex(
        (e) => e.id.toString() === this.userId
      );
      if (index !== -1) {
        return USER_MAIN_DATA[index].userInfos;
      } else {
        return { error: true };
      }
    } else if (process.env.REACT_APP_ENV === "prod") {
      const datas = fetchUserInfos(this.userId)
        .then((res) => res.json())
        .then((data) => {
          return data.data.userInfos;
        })
        .catch((error) => {
          return { error: error };
        });

      return datas;
    }
  }

  async getUserScore() {
    if (process.env.REACT_APP_ENV === "dev") {
      const index = USER_MAIN_DATA.findIndex(
        (e) => e.id.toString() === this.userId
      );
      if (index !== -1) {
        return USER_MAIN_DATA[index].todayScore || USER_MAIN_DATA[index].score;
      } else {
        return { error: true };
      }
    } else if (process.env.REACT_APP_ENV === "prod") {
      const datas = fetchUserInfos(this.userId)
        .then((res) => res.json())
        .then((data) => {
          return data.data.todayScore || data.data.score;
        })
        .catch((error) => {
          return { error: error };
        });

      return datas;
    }
  }

  async getUserResume() {
    if (process.env.REACT_APP_ENV === "dev") {
      const index = USER_MAIN_DATA.findIndex(
        (e) => e.id.toString() === this.userId
      );
      if (index !== -1) {
        return USER_MAIN_DATA[index].keyData;
      } else {
        return { error: true };
      }
    } else if (process.env.REACT_APP_ENV === "prod") {
      const datas = fetchUserInfos(this.userId)
        .then((res) => res.json())
        .then((data) => {
          return data.data.keyData;
        })
        .catch((error) => {
          return { error: error };
        });

      return datas;
    }
  }

  async getUserActivity() {
    if (process.env.REACT_APP_ENV === "dev") {
      const index = USER_ACTIVITY.findIndex(
        (e) => e.userId.toString() === this.userId
      );
      if (index !== -1) {
        let formattedDatas = [];

        USER_ACTIVITY[index].sessions.forEach((element) => {
          const day = new Date(element.day).getDate();

          formattedDatas.push({
            name: day,
            calories: element.calories,
            kilogram: element.kilogram,
          });
        });

        return formattedDatas;
      } else {
        return { error: true };
      }
    } else if (process.env.REACT_APP_ENV === "prod") {
      const datas = fetchUserActivity(this.userId)
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
        .catch((error) => {
          return { error: error };
        });

      return datas;
    }
  }

  async getUserAverageSessions() {
    if (process.env.REACT_APP_ENV === "dev") {
      const index = USER_AVERAGE_SESSIONS.findIndex(
        (e) => e.userId.toString() === this.userId
      );
      if (index !== -1) {
        return USER_AVERAGE_SESSIONS[index].sessions.map((e) => {
          return e.sessionLength;
        });;
      } else {
        return { error: true };
      }
    } else if (process.env.REACT_APP_ENV === "prod") {
      const datas = fetchUserAverageSessions(this.userId)
        .then((res) => res.json())
        .then((data) => {
          return data.data.sessions.map((e) => {
            return e.sessionLength;
          });
        })
        .catch((error) => {
          return { error: error };
        });

      return datas;
    }
  }

  async getUserPerformance() {
    if (process.env.REACT_APP_ENV === "dev") {
      const index = USER_PERFORMANCE.findIndex(
        (e) => e.userId.toString() === this.userId
      );
      if (index !== -1) {
        let kinds = Object.keys(USER_PERFORMANCE[index].kind).map((e) => {
          return (
            USER_PERFORMANCE[index].kind[e][0].toUpperCase() + USER_PERFORMANCE[index].kind[e].slice(1)
          );
        });

        let sortedPerfDatas = USER_PERFORMANCE[index].data.map((e) => {
          return {
            kind: kinds[e.kind - 1],
            value: e.value,
          };
        });

        return sortedPerfDatas;
      } else {
        return { error: true };
      }
    } else if (process.env.REACT_APP_ENV === "prod") {
    const datas = fetchUserPerformance(this.userId)
      .then((res) => res.json())
      .then((data) => {
        let kinds = Object.keys(data.data.kind).map((e) => {
          return (
            data.data.kind[e][0].toUpperCase() + data.data.kind[e].slice(1)
          );
        });

        let sortedPerfDatas = data.data.data.map((e) => {
          return {
            kind: kinds[e.kind - 1],
            value: e.value,
          };
        });

        return sortedPerfDatas;
      })
      .catch((error) => {
        return { error: error };
      });

    return datas;
  }
}}

export const handleError = () => {
  return (
    <div className="graph-error graph">
      <span>Une erreur est survenue, veuillez reessayer plus tard</span>
    </div>
  );
};
