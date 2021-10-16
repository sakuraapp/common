import { Opcodes } from './opcodes'
import { Permissions } from './permissions'
import { RoomTypes } from './room_types'

export interface IRoomTypes {
    [key: number]: string
}

export interface IPermissions {
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
    Opcodes,
    Permissions,
    RoomTypes,
}
