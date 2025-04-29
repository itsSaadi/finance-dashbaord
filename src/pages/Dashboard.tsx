import AccountCard from '@/components/AccountCard';
import { useAccounts } from '@/services/useAccounts';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { data: accounts, isLoading, isError } = useAccounts();
  const navigate = useNavigate();

  if (isLoading) return <div className="text-center mt-10 text-lg">Loading accounts...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Error loading accounts.</div>;

  return (
    <>
      <main className="px-4 md:px-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(accounts)?.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              onClick={() => navigate(`/account/${account.id}`)}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Dashboard;
