import { Injectable } from '@angular/core';

@Injectable()
export class UserSettings {
    // storage = new Storage(LocalStorage);
    // constructor(private events: Events) { }

    // favoriteTeam(team, tournamentId, tournamentName){
    //     let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
    //     this.storage.set(team.id, JSON.stringify(item));
    //     this.events.publish('favorites:changed');
    // }

    // unfavoriteTeam(team){
    //     this.storage.remove(team.id);
    //     this.events.publish('favorites:changed');
    // }

    // isFavoriteTeam(teamId){
    //     return this.storage.get(teamId).then(value => value ? true : false);
    // }

    // getAllFavorites(){
    //     let items = [];
    //     _.forIn(window.localStorage, (v, k) => {
    //         items.push(JSON.parse(v));
    //     });
    //     return items.length ? items : null;
    // }
}
