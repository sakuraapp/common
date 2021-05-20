import { Opcodes } from './src/opcodes'
import { Permissions } from './src/permissions'
import { RoomTypes } from './src/room_types'

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
