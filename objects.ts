
export interface Item {
  id: number
  type: {
    id: number
    name: string
    img: string
  }
  lvl?: number
  price?: number
  damage?: number
  heal?: number
}

export interface Character {
  id: number
  name: string
  x: number
  y: number
  img?: string
  lvl?: number
  status: 'IDLE' | 'FIGHTING' | 'TRADING' | 'ASLEEP'
}

export interface BaseMessage {
  /* Consider client id generation through nanoid */
  id: string
  type: 'PRIVATE' | 'GROUP' | 'CLAN' | 'LOCAL' | 'GLOBAL'
  author?: Character
  authorId?: number
  message: string
}

export interface MessagePrivate extends BaseMessage {
  type: 'PRIVATE'
}
export interface MessageGroup extends BaseMessage {
  type: 'GROUP'
}
export interface MessageClan extends BaseMessage {
  type: 'CLAN'
}
export interface MessageLocal extends BaseMessage {
  type: 'LOCAL'
}
export interface MessageGlobal extends BaseMessage {
  type: 'GLOBAL'
}

export type Message = MessagePrivate | MessageGroup | MessageClan | MessageLocal | MessageGlobal;


export type FightAction = 'STEP_AHEAD' | 'BASIC_ATTACK' | 'USE_ABILITY';

export type Collisions = [Array<number>]

export interface Mob {
  id: number
  status: 'IDLE' | 'FIGHTING' | 'RESPAWNING'
  type: {
    id: number
    category: 'common' | 'rare' | 'heroic' | 'legendary'
    name: string
    img: string
  }
  lvl: number
  damage?: number
  /** Determines if will start fight by itself. */
  aggresive?: boolean
}