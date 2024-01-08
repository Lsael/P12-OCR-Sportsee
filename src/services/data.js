
export default class UserDatas {
    constructor(id) {
        this.id = id
    }

    // fetching routes
    async fetchUserInfos() {
        const datas = await fetch(`http://localhost:3000/user/${this.id}`)
        .then(res => res.json())
        .then(data => {
            return data.data.userInfos
        })
        return datas
    }

    async fetchUserActivity() {
        const datas = await fetch(`http://localhost:3000/user/${this.id}/activity`)
        return datas.json()
    }

    async fetchUserAverageSessions() {
        const datas = await fetch(`http://localhost:3000/user/${this.id}/average-sessions`)
        return datas.json()
    }

    async fetchUserPerformance() {
        const datas = await fetch(`http://localhost:3000/user/${this.id}/performance`)
        return datas.json()
    }

    // Formating Datas
    getUsername() {
        return this.fetchUserInfos().data.userInfos.firstName
    }
}