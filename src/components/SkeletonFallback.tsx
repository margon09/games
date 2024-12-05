import PageLayout from './PageLayout'

const SkeletonFallback = () => {
  return <PageLayout asideContent={null} loading={true}>{null}</PageLayout>
}

export default SkeletonFallback


