export interface IUser {
    id: number;
    cards: ICard[] | null;
}

export interface ICard {
    CardName: string;
    CardLogo: string;
    CardColor: string;
    CardStory: ICardStory[] | null;
}

export interface ICardStory {
    date: string;
    value: number;
}

export interface ICategories extends ICard {
    networth: number;
}