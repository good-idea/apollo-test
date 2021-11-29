import { IEvent } from './types'

export interface KeyupEvent extends IEvent {
	type: 'keyup'
	payload: { key: string }
}

export interface EventMap {
	keyup: KeyupEvent
}
