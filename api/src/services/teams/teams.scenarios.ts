import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TeamCreateArgs>({
  team: {
    one: {
      data: {
        name: 'String1081054',
        location: 'String',
        description: 'String',
        updatedAt: '2022-04-19T14:20:10Z',
      },
    },
    two: {
      data: {
        name: 'String2030178',
        location: 'String',
        description: 'String',
        updatedAt: '2022-04-19T14:20:10Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
