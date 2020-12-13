declare namespace SakuraCommon {
    interface RoomTypes {
        [key: number]: string
    }

    interface Permissions {
        [key: string]: number
    }

    interface Opcodes {
        [key: string]: string | number
    }
}

export = SakuraCommon
