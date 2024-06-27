import Joi from "joi";

export function applicantValidation() {
  const schema = Joi.object().keys({
    "prefix": Joi.string().required(),
    "firstName": Joi.string().required().min(3),
    "lastName": Joi.string().required(),
    "gender": Joi.string().required(),
    "phone": Joi.string().required().min(10).max(10),
    "email": Joi.string().required().email(),
    "district": Joi.string().required(),
    "office": Joi.string().required(),
  }).unknown(true);

  return schema;
}

export function brideValidation() {
  const schema = Joi.object().keys({
    "prefix": Joi.string().required(),
    "firstName": Joi.string().required().min(3),
    "lastName": Joi.string().required(),
    "fatherprefix": Joi.string().required(),
    "fatherfirstName": Joi.string().required().min(3),
    "fatherlastName": Joi.string().required(),
    "motherprefix": Joi.string().required(),
    "motherfirstName": Joi.string().required().min(3),
    "motherlastName": Joi.string().required(),
    "status": Joi.string().required(),
    "occupation": Joi.string().required(),
    "phone": Joi.string().required().min(10).max(10),
    "email": Joi.string().required().email(),
    "district": Joi.string().required(),
    "office": Joi.string().required(),
  }).unknown(true);

  return schema;
}

export function generateRequiredSchema(fields) {
  const fieldSchemas = fields.map((field) => {
    console.log(field);
    return { [field]: Joi.string().required() };
  });

  const schema = Joi.object().keys({}).keys(...fieldSchemas);

  // schema.unknown(true);

  return schema;
}

// export function generateRequiredSchema(fields) {
//   const fieldSchemas = fields.map((field) => {
//     return { [field]: Joi.string().required().unknown(true) };
//   });

//   const completeSchema = Joi.object().keys(...fieldSchemas);

//   // Create a schema for undefined keys (extra fields)
//   const undefinedSchema = Joi.object().pattern(Joi.string(), Joi.any());

//   // Combine the defined and undefined schemas using Joi.alternatives()
//   const schema = Joi.alternatives().try(completeSchema, undefinedSchema);

//   return schema;
// }