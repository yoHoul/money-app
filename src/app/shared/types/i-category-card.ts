export interface IUser {
    id: number;
    cards: ICard[] | null;
}

export interface ICard {
    CardName: string;
    CardLogo: string;
    CardColor: string;
    CardWorth: number;
}

export interface logs {
    date: string;
    value: number;
}

export enum CardLogo {
    ForkAndKnife = 'ForkAndKnife',
    Ticket = 'Ticket'
}

export enum CardColor {
    Pink = 'Pink',
    Blue = 'Blue',
    Green = 'Green',
    Red = 'Red',
    Black = 'Black'
}