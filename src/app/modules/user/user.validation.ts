import { z } from 'zod'

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password Cannot be more than 20 Characters' })
    .optional(),
})

export const UserValidation = {
  userValidationSchema,
}
