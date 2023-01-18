import SuperHeros from "../model/superHeros";

export default class HeroService {
  static getHeroes(): Promise<SuperHeros[]> {
    return fetch(`http://localhost:3004/superHeros`)
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static getHeros(id: number): Promise<SuperHeros> {
    return fetch(`http://localhost:3004/superHeros/${id}`).then((response) =>
      response
        .json()
        .then((data) => (this.empty(data) ? null : data))
        .catch((error) => this.error(error))
    );
  }

  static majHeros(hero:SuperHeros): Promise<SuperHeros>{
    return fetch(`http://localhost:3004/superHeros/${hero.id}`,{
        method: 'PUT',
        body:JSON.stringify(hero),
        headers: {"content-type": "application/json"}
    }).then(response => response.json()).catch(error => this.error(error))
  }

  static ajoutHeros(hero:SuperHeros):Promise<SuperHeros>{
    return fetch(`http://localhost:3004/superHeros/`,{
        method: 'POST',
        body:JSON.stringify(hero),
        headers: {"content-type": "application/json"}
    }).then(response => response.json() ).catch(error => this.error(error))
  }

  static supprimer(hero:SuperHeros):Promise<{}> {
    return fetch(`http://localhost:3004/superHeros/${hero.id}`,{
        method:"DELETE",
        headers:{"content-type": "application/json"}
    }).then(response => response.json()).catch(error=> this.error(error))
  }

  static empty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static error(error: Error): void {
    console.error(error);
  }
}
