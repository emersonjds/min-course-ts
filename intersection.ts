//PlayerInfo
//UseInfo
//CharInfo

type UserInfo = {
    id: number
    name: string
    // optional
    email?: string
}

const userInfo: UserInfo = {
    id: 1,
    name: 'Emerson'
}

type CharInfo = {
    level: number
    nickName: string
}

const char: CharInfo = {
    level: 100,
    nickName: 'major'
}

type PlayerInfo = UserInfo & CharInfo

const player: PlayerInfo = {
    id: 10,
    name: 'Emerson',
    level: 5,
    nickName: 'major'
}

