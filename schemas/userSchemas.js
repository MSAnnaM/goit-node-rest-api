import Joi from "joi";

export const userRegistrationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

export const userUpdateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid("starter", "pro", "business")
    .required(),
});
