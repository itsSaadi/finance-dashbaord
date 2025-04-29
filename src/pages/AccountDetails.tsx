import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TransactionsTable from '@/components/TransactionsTable';
import { Toast } from '@/components/toast';
import { useGet } from '@/hooks/useGet';
import { Transaction } from '@/interface/transactions.interface';
import { BASE_API_URL } from '@/constants/constant';

function AccountDetails() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { data: transactions, isLoading, isError } = useGet<Transaction[]>(
    ['transactions', id], 
    `${BASE_API_URL}transactions?accountid=${id}`, 
  );

  useEffect(() => {
    if (isError) {
      setShowError(true)
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  }, [isError, navigate]);


  useEffect(() => {
    if (transactions && transactions.length > 0) {
      setShowSuccess(true);
    }
  }, [transactions]);

  if (isLoading) return <div className='px-8'>Loading transactions...</div>;

  if (showError) {
    return (
      <div className='px-4 text-red-600'>
        <Toast type='error' message='Failed to fetch transactions!' />
      </div>
    );
  }

  return (

    <>
      {showSuccess && <Toast type='success' message='Transactions fetched successfully!' />}
      <div className="p-4">
        <div
          className="flex items-center px-4 mb-4 space-x-2 cursor-pointer"
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft className="w-5 h-5 text-blue-600 hover:text-blue-800 transition" />
          <span className="text-blue-600 hover:text-blue-800 font-medium">Back to Dashboard</span>
        </div>

        <h2 className="text-2xl px-4 font-semibold mb-4">Transactions</h2>

        <div className="px-4">
          <TransactionsTable transactions={transactions || []} />
        </div>
      </div>
    </>
  );
}

export default AccountDetails;
