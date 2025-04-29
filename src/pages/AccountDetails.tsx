import { useParams } from 'react-router-dom';
import { useTransactions } from '@/services/useTransactions';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TransactionsTable from '@/components/TransactionsTable';

function AccountDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: transactions, isLoading, isError } = useTransactions(id!);


  if (isLoading) return <div className='px-4'>Loading transactions...</div>;
  if (isError) return <div className='px-4'>Error loading transactions.</div>;

  return (
    <div className="p-4">
      <div className="flex items-center px-4 mb-4 space-x-2 cursor-pointer" onClick={() => navigate('/dashboard')}>
        <ArrowLeft className="w-5 h-5 text-blue-600 hover:text-blue-800 transition" />
        <span className="text-blue-600 hover:text-blue-800 font-medium">Back to Dashboard</span>
      </div>

      <h2 className="text-2xl px-4 font-semibold mb-4">Transactions</h2>

      <div className="px-4">
        <TransactionsTable transactions={transactions || []} />
      </div>
    </div>
  );
}

export default AccountDetails;