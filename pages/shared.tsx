import UserFolderNameArea from '@/components/pages/shared/UserFolderNameArea';
import SharedSection from '@/components/pages/shared/SharedSection';
import SampleFolderProvider from '@/context/sampleFolderContext';
import Layout from '@/components/layout/Layout';

export default function Shared() {
  return (
    <Layout>
      <SampleFolderProvider>
        <UserFolderNameArea />
        <SharedSection />
      </SampleFolderProvider>
    </Layout>
  );
}
