import Property from '#models/property';
import type { HttpContext } from '@adonisjs/core/http'

export default class PropertiesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    try {
      const properties = await Property
        .query()
        .where('isAvailable', true)
        .select(
          'id', 'title', 'address', 'city', 'department', 'type', 'price', 'createdAt'
        )

      return response
        .status(200)
        .json({ data: properties })
    } catch (error) {
      return response
        .status(500)
        .json({
          message: 'Error retrieving properties',
          error: error
        });
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) { }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    try {
      const property = await Property
        .query()
        .where('id', params.id)
        .preload('user', (user) => user.select('fullName', 'avatar'))
        .preload('offers', (offer) => offer.select('name'))
        .first()

      if (!property) {
        return response
          .status(404)
          .json({ message: 'Property not found.' })
      }

      return response
        .status(200)
        .json({ data: property })
    } catch (error) {
      return response
        .status(500)
        .json({
          message: 'Error retrieving property',
          error: error
        });
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) { }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) { }

  /**
  * Filter properties based on various criteria
  */
  async filter({ response, request }: HttpContext) {
    try {
      const {
        city, department, type, minPrice, maxPrice,
        numLivingRooms, numBedrooms, numBathrooms, offers
      } = request.qs();

      const properties = await Property.query()
        .where('isAvailable', true)
        .if(city, (query) => query.where({ city }))
        .if(department, (query) => query.where({ department }))
        .if(type, (query) => query.where({ type }))
        .if(minPrice, (query) => query.where('price', '>=', minPrice))
        .if(maxPrice, (query) => query.where('price', '<=', maxPrice))
        .if(numLivingRooms, (query) => query.where({ numLivingRooms }))
        .if(numBedrooms, (query) => query.where({ numBedrooms }))
        .if(numBathrooms, (query) => query.where({ numBathrooms }))
        .if(offers, (query) => query.whereHas('offers', (offerQuery) => {
          offerQuery.whereIn('name', offers);
        }))
        .select(
          'id', 'title', 'address', 'city', 'department', 'type', 'price', 'createdAt'
        )

      return response
        .status(200)
        .json({ data: properties })
    } catch (error) {
      return response
        .status(500)
        .json({
          message: 'Error filtering properties',
          error: error.message,
        });
    }
  }
}