const Joi = require('joi');
const schemaLocation = Joi.object().keys({
        event: Joi.string(),
        vehicle_id: Joi.number(),
        license_plate: Joi.string(),
        freight: Joi.string(),
        phone: Joi.string(),
        city: Joi.object().keys({
            name: Joi.string(),
            state: Joi.string()
        }),
        coordinate: Joi.object().keys({
            latitude: Joi.number(),
            longitude: Joi.number()
        }),
        geolocation_enabled: Joi.boolean(),
        timestamp: Joi.string()
})

module.exports = {
    schemaLocation
}