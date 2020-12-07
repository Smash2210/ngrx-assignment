export interface Login {
    email: string,
    password: string
}

export interface LoginStatus {
    isLoggedIn: boolean,
    token: string | null,
    message: {
        stack: string,
        message: string
    } | null
}

export interface ListDataInterface {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string
}

export interface AppState {
    login: Login,
    loginData: LoginStatus,
    userData: ListDataInterface[]
}