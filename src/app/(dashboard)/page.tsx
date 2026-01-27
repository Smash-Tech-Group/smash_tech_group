import { Suspense } from 'react';
import { DashboardStats } from '@/features/dashboard/components/DashboardStats';
import { RecentActivity } from '@/features/dashboard/components/RecentActivity';
import { getDashboardData } from '@/features/dashboard/queries/getDashboardData';

export default async function DashboardPage() {
  // Fetch data on server
  const dashboardData = await getDashboardData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <Suspense fallback={<div>Loading stats...</div>}>
        <DashboardStats data={dashboardData.stats} />
      </Suspense>

      <Suspense fallback={<div>Loading activity...</div>}>
        <RecentActivity activities={dashboardData.recentActivity} />
      </Suspense>
    </div>
  );
}

// Revalidate every 5 minutes
export const revalidate = 300;
