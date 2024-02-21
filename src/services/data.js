import {
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserInfos,
  fetchUserPerformance,
} from "./fetch.js";

export class UserDatas {
  constructor(userId) {
    this.userId = userId;
  }

  getUserInfos() {
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

  getUserScore() {
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

  getUserResume() {
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

  getUserActivity() {
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

  getUserAverageSessions() {
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

  getUserPerformance() {
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
}

export const handleError = () => {
  return (
    <div className="graph-error graph">
      <span>Une erreur est survenue, veuillez reessayer plus tard</span>
    </div>
  );
};
