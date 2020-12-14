export interface IRoomTypes {
    [key: number]: string
}

export interface IPermissions {
    [key: string]: number
}

export interface IOpcodes {
    [key: string]: string | number
}

export const RoomTypes: IRoomTypes
export const Permissions: IPermissions
export const Opcodes: IOpcodes
