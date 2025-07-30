// app/job/[id]/page.tsx
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/authOptions';
import { redirect } from 'next/navigation';
import JobDetailClient from '@/components/JobDetailContent'; // the wrapper component

export default async function JobDetailPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return <JobDetailClient />;
}
