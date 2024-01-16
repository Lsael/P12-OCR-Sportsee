
const fetchUserInfos = async(userId) => {
    const datas = await fetch(`http://localhost:3000/user/${userId}`)
    return datas
}

const fetchUserActivity = async(userId) => {
    const datas = await fetch(`http://localhost:3000/user/${userId}/activity`)
    return datas
}

const fetchUserAverageSessions = async(userId) => {
    const datas = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
    return datas
}

const fetchUserPerformance = async(userId) => {
    const datas = await fetch(`http://localhost:3000/user/${userId}/performance`)
    .then(res => res.json())
    return datas
}

const getUserInfos = (userId) => {
    const datas = fetchUserInfos(userId)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data.data.userInfos
        })
    return datas
}

const getUserActivity = (userId) => {
    const datas = fetchUserActivity(userId)
    .then(res => res.json())
    .then(data => {
        return data.data.sessions
    })
    return datas
}

const getUserAverageSessions = (userId) => {
    const datas = fetchUserAverageSessions()
    .then(res => res.json())
    .then(data => {
        return data.data.sessions
    })
    return datas
}

const getUserPerformance = (userId) => {
    const datas = fetchUserPerformance()
    .then(res => res.json())
    .then(data => {
        return {
            kind: data.data.kind,
            data: data.data.data
        }
    })
    return datas
}

export {
    getUserInfos,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance
}
    