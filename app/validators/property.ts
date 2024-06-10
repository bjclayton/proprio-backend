import vine from '@vinejs/vine'

export const createPropertyValidator = vine.compile(
    vine.object({
        title: vine.string().trim().minLength(3),
        description: vine.string().trim().nullable(),
        address: vine.string().trim().minLength(8),
        city: vine.string().trim().minLength(3),
        department: vine.enum([
            'Artibonite', 'Centre', 'Grand Anse', 'Nippes', 'Nord', 'Nord-Est',
            'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Est'
        ]),
        type: vine.enum([
            'Maison', 'Appartement', 'Condo', 'Studio', 'Villa', 'Duplex',
            'Penthouse', 'Chalet', 'Bungalow', 'Guesthouse',
            'Résidence étudiante', 'Local commercial', 'Bureau', 'Atelier',
            'Entrepôt', 'Terrain'
        ]),
        price: vine.number().positive(),
        num_living_rooms: vine.number().positive(),
        num_bedrooms: vine.number().positive(),
        num_bathrooms: vine.number().positive(),
        is_available: vine.boolean(),
    })
)

export const updatePropertyValidator = vine.compile(
    vine.object({
        title: vine.string().trim().minLength(3).nullable(),
        description: vine.string().trim().nullable(),
        address: vine.string().trim().minLength(8).nullable(),
        city: vine.string().trim().minLength(3).nullable(),
        department: vine.enum([
            'Artibonite', 'Centre', 'Grand Anse', 'Nippes', 'Nord', 'Nord-Est',
            'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Est'
        ]).nullable(),
        type: vine.enum([
            'Maison', 'Appartement', 'Condo', 'Studio', 'Villa', 'Duplex',
            'Penthouse', 'Chalet', 'Bungalow', 'Guesthouse',
            'Résidence étudiante', 'Local commercial', 'Bureau', 'Atelier',
            'Entrepôt', 'Terrain'
        ]).nullable(),
        price: vine.number().positive().nullable(),
        num_living_rooms: vine.number().positive().nullable(),
        num_bedrooms: vine.number().positive().nullable(),
        num_bathrooms: vine.number().positive().nullable(),
        is_available: vine.boolean().nullable(),
    })
)
