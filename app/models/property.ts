import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Property extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare address: string

  @column()
  declare city: string

  @column()
  declare department: string

  @column()
  declare type: string

  @column()
  declare price: number

  @column()
  declare offers: string

  @column()
  declare numOfLivingRooms: number

  @column()
  declare numBedrooms: number

  @column()
  declare numBathrooms: number

  @column()
  declare isAvailable: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}