export type AddressType = {
    address: string
    coords: [number, number]
}

export interface IUser {
    firstName: string
    lastName?: string
    addresses: AddressType[]
    phones: {
        main: number
        additional?: number[]
    }
}

export type ErrorType = string

export interface IUserQuery {
    user: IUser
    isLoading: boolean
    error: ErrorType
    userDataUploadIsSuccess: boolean
}