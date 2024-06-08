import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import PropertyImage from './property_image.js'
import Favorite from './favorite.js'

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

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => PropertyImage)
  declare images: HasMany<typeof PropertyImage>

  @hasMany(() => Favorite)
  declare favorites: HasMany<typeof Favorite>
}