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
    [key: string]: string | number
}

export {
    Opcodes,
    Permissions,
    RoomTypes,
}
