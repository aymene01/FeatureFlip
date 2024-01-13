import { prisma } from '@flag-platform/db'
import { FeatureFlag, Environment } from '@flag-platform/db/types'

export const getFeatureFlagsByProjectName = async (
  projectName: string,
  environment: Environment,
): Promise<FeatureFlag[] | null> => {
  const project = await prisma.project.findFirst({
    where: { name: projectName },
  })

  if (!project) {
    return null
  }

  return prisma.featureFlag.findMany({
    where: { projectId: project.id, environment },
  })
}
