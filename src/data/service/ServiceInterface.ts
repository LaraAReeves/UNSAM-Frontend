import { Entity } from "@/data/domain/Entity"

export interface ServiceInterface {
  get(): Promise<unknown>

  getById(id: number): Promise<unknown>

  post(entity: Entity): Promise<unknown>

  put(entity: Entity): Promise<unknown>

  delete(id: number): Promise<unknown>
}