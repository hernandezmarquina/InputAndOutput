import { ActionType } from './ActionType'

export class Action {
    
    type: ActionType
    message: String

    constructor(type: ActionType, message: String, ){
        this.type = type;
        this.message = message;
    }
}