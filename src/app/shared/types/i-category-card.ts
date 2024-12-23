export interface ICards {
    id: number;
    cards: card[] | null;
}

export interface card {
    CardName: string;
    CardLogo: CardLogo;
    CardColor: CardColor;
    CardWorth: number;
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