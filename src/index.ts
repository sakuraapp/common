import { Opcode } from './opcode'
import { Permissions } from './permissions'
import { Role } from './role'

export interface IPermissions {
    [key: string]: number
}

export interface IRoles {
    [key: string]: number
}

export interface IOpcodes {
    [key: string]: number
}

export type UserId = number
export type RoomId = number

export interface UserInfo {
    id: UserId
    username: string
    discriminator: string
    avatar?: string
}

export interface RoomInfo {
    id: RoomId
    name: string
    owner: UserInfo
    private: boolean
}

export {
    Opcode,
    Permissions,
    Role,
}
