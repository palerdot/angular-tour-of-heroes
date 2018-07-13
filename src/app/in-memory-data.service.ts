import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        {
            id: 1,
            name: "Kappal Vela Muthaiah"   
        },
        {
            id: 2,
            name: "Ooma paya Subramani"
        },
        {
            id: 3,
            name: "Server Tamizh Mani"
        }
    ];
    return {heroes};
  }
}