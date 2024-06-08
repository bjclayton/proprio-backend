import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'properties'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable().primary()
      table.integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
      table.string('title').notNullable()
      table.text('description').nullable()
      table.string('address').notNullable()
      table.string('city').notNullable()

      table.enu('department', ['Artibonite', 'Centre', 'Grand Anse', 'Nippes', 'Nord', 'Nord-Est', 'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Est'], {
        useNative: true,
        enumName: 'department_name',
        existingType: true,
      }).notNullable()

      table.enu('type', ['Maison', 'Appartement', 'Condo', 'Studio', 'Villa', 'Duplex', 'Penthouse', 'Chalet', 'Bungalow', 'Guesthouse', 'Résidence étudiante', 'Local commercial', 'Bureau', 'Atelier', 'Entrepôt', 'Terrain'], {
        useNative: true,
        enumName: 'property_type',
        existingType: true,
      }).notNullable()

      table.integer('price').notNullable()
      table.text('offers').notNullable()
      table.integer('num_living_rooms').notNullable()
      table.integer('num_bedrooms').notNullable()
      table.integer('num_bathrooms').notNullable()
      table.boolean('is_available').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}