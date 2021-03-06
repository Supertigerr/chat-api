import EventEmitter from 'eventemitter3';
import { Server } from '../store/Servers';
import { Message } from './Message';


export interface ClientEvents {
  'messageCreated': (message: Message) => void;
  'messageDeleted': (data: {channelId: string, messageId: string}) => void;
  'serverJoined': (server: Server) => void;
}


export class CustomEventEmitter extends EventEmitter {
  constructor() {
    super();
  }
  emitEvent <U extends keyof ClientEvents>(event: U, ...args: Parameters<ClientEvents[U]>) {
    return this.emit(event, ...args);
  }
}