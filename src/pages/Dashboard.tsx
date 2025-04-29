import AccountCard from '@/components/AccountCard';
import { Toast } from '@/components/toast';
import { BASE_API_URL } from '@/constants/constant';
import { useGet } from '@/hooks/useGet';
import { Account } from '@/interface/account.interface';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [showSuccess, setShowSuccess] = useState(false);


  const { data: accounts, isLoading, isError } = useGet<Account[]>(
    "accounts",
    `${BASE_API_URL}accounts`
  ); const navigate = useNavigate();

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      setShowSuccess(true);
    }
  }, [accounts]);


  if (isLoading) return <div className="text-center mt-10 text-lg">Loading accounts...</div>;
  if (isError) {
    return (
      <div className='px-4 text-red-600'>
        <Toast type='error' message='Failed to fetch Accounts!' />
      </div>
    );
  }
  return (
    <>

      {showSuccess && <Toast type='success' message='Accounts fetched successfully!' />}

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
