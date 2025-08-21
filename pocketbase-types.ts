/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	Contact = "contact",
	Events = "events",
	EventsPage = "eventsPage",
	Give = "give",
	Home = "home",
	Ministry = "ministry",
	TeamMember = "teamMember",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

type ExpandType<T> = unknown extends T
	? T extends unknown
		? { expand?: unknown }
		: { expand: T }
	: { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string
	created?: IsoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated?: IsoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated?: IsoDateString
}

export type MfasRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	method: string
	recordRef: string
	updated?: IsoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated?: IsoDateString
}

export type SuperusersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export type ContactRecord = {
	city: string
	country: string
	created?: IsoDateString
	email: string
	id: string
	instagram: string
	logo: string
	paypal: string
	street: string
	updated?: IsoDateString
	youtube: string
}

export type EventsRecord = {
	created?: IsoDateString
	eventDate: string
	eventImg?: string
	eventLocation: string
	eventText: HTMLString
	eventTime: string
	eventTitle: string
	id: string
	updated?: IsoDateString
}

export type EventsPageRecord = {
	created?: IsoDateString
	eventsSubText: HTMLString
	eventsSubTitle: string
	eventsText: HTMLString
	eventsTitle: string
	id: string
	updated?: IsoDateString
}

export type GiveRecord = {
	bankueberweisungBank: string
	bankueberweisungBic: string
	bankueberweisungEmpfaenger: string
	bankueberweisungIban: string
	created?: IsoDateString
	giveText: HTMLString
	giveTitle: string
	id: string
	updated?: IsoDateString
}

export type HomeRecord = {
	churchImg: string
	churchText: HTMLString
	churchTitle: string
	created?: IsoDateString
	heroImg: string
	heroText: HTMLString
	heroTitle: string
	id: string
	mission: HTMLString
	teamTitle: string
	updated?: IsoDateString
	values: HTMLString
	vision: HTMLString
	visionMissionValuesTitle: string
}

export type MinistryRecord = {
	created?: IsoDateString
	id: string
	ministryDescription: HTMLString
	ministryImg: string
	ministryTitle: string
	updated?: IsoDateString
}

export type TeamMemberRecord = {
	created?: IsoDateString
	id: string
	memberDescription: HTMLString
	memberImg: string
	memberName: string
	memberRole: string
	updated?: IsoDateString
}

export type UsersRecord = {
	agreeToNewsletter?: boolean
	agreeToPrivacy?: boolean
	agreeToTerms?: boolean
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	firstName?: string
	id: string
	isAdm?: boolean
	lastName?: string
	password: string
	stripeId?: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type ContactResponse<Texpand = unknown> = Required<ContactRecord> & BaseSystemFields<Texpand>
export type EventsResponse<Texpand = unknown> = Required<EventsRecord> & BaseSystemFields<Texpand>
export type EventsPageResponse<Texpand = unknown> = Required<EventsPageRecord> & BaseSystemFields<Texpand>
export type GiveResponse<Texpand = unknown> = Required<GiveRecord> & BaseSystemFields<Texpand>
export type HomeResponse<Texpand = unknown> = Required<HomeRecord> & BaseSystemFields<Texpand>
export type MinistryResponse<Texpand = unknown> = Required<MinistryRecord> & BaseSystemFields<Texpand>
export type TeamMemberResponse<Texpand = unknown> = Required<TeamMemberRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	contact: ContactRecord
	events: EventsRecord
	eventsPage: EventsPageRecord
	give: GiveRecord
	home: HomeRecord
	ministry: MinistryRecord
	teamMember: TeamMemberRecord
	users: UsersRecord
}

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	contact: ContactResponse
	events: EventsResponse
	eventsPage: EventsPageResponse
	give: GiveResponse
	home: HomeResponse
	ministry: MinistryResponse
	teamMember: TeamMemberResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'contact'): RecordService<ContactResponse>
	collection(idOrName: 'events'): RecordService<EventsResponse>
	collection(idOrName: 'eventsPage'): RecordService<EventsPageResponse>
	collection(idOrName: 'give'): RecordService<GiveResponse>
	collection(idOrName: 'home'): RecordService<HomeResponse>
	collection(idOrName: 'ministry'): RecordService<MinistryResponse>
	collection(idOrName: 'teamMember'): RecordService<TeamMemberResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
