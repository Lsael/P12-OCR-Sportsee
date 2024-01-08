
export default class UserDatas {
    constructor(id) {
        this.id = id
    }

    async getUserInfos() {
        const datas = await fetch(`http://localhost:3000/user/${this.id}`)
        .then(res => res.json())
        .then(data => {
            return data.data.userInfos
        })
        return datas
    }

    async getUserActivity() {
        const datas = await fetch(`http://localhost:3000/user/${this.id}/activity`)
        .then(res => res.json())
        .then(data => {
            return data.data.sessions
        })
        return datas
    }

    async getUserAverageSessions() {
        const datas = await fetch(`http://localhost:3000/user/${this.id}/average-sessions`)
        .then(res => res.json())
        .then(data => {
            return data.data.sessions
        })
        return datas
    }

    async getUserPerformance() {
        const datas = await fetch(`http://localhost:3000/user/${this.id}/performance`)
        .then(res => res.json())
        .then(data => {
            return {
                kind: data.data.kind,
                data: data.data.data
            }
        })
        return datas
    }
}