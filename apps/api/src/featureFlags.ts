import { prisma } from '@feature-flip/db'
import { FeatureFlag, Environment } from '@feature-flip/db/types'

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
