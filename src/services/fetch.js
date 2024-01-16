
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

export {
    fetchUserInfos,
    fetchUserActivity,
    fetchUserAverageSessions,
    fetchUserPerformance
}