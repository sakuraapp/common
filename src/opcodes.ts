export enum Opcodes {
    DISCONNECT = 0,
    AUTHENTICATE = 1,
    JOIN_ROOM = 2,
    LEAVE_ROOM = 3,
    CREATE_ROOM = 4,
    ADD_USER = 5,
    REMOVE_USER = 6,
    PLAYER_STATE = 7,
    SEEK = 8,
    SEND_MESSAGE = 9,
    QUEUE_ADD = 10,
    QUEUE_REMOVE = 11,
    VIDEO_SET = 12,
    VIDEO_END = 13,
    VIDEO_SKIP = 14,
    ROOM_JOIN_REQUEST = 15,
    DISPATCH_CONTROL = 16,
    UPDATE_ROOM = 17
}
