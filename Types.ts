export type JokeType = {
    _id?: string,
    code: number,
    he: string,
    translit: string,
    ru: string
}

type DictaturaActionType = {
    body: string
}

export type DictaturaType = {
    _id?: string,
    code: number,
    header: string,
    actions: DictaturaActionType[]
}