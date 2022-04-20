import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String6204510',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        email: 'String2502904',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
