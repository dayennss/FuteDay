export interface Artilharia {
    player: Player,
    team: Team, 
    numberOfGoals :number
}
export interface Player {
    id: number,
    name: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    countryOfBirth: string,
    nationality: string,
    position: string, 
    shirtNumber: string, 
    lastUpdated: string
}

export interface Team {
    id:number,
    name: string
}