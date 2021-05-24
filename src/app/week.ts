import {Match} from './match'
export interface Week{
    number: number,
    matches: Match[],
    startDate: Date,
    endDate: Date
}