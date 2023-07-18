import { Ref } from "vue";

interface SearchList {
  limit : number,
  offset : number,
  term: string,
  orderBy?: string,
  order?: 'asc'|'desc',
  filters: object
}


interface Crudable{
  async create() : Ref<T>
  async list(parameters: SearchList): Ref<T>[]
  async show(token: string): Ref<T>
  async update(token: string, payload: object): Ref<T>
  async destroy?(token:string): boolean
}

export class Model implements Crudable{
  protected aliasName = this.constructor.name
  
}

export class Ticket extends Model {

}