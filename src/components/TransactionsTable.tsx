import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function TransactionsTable({ transactions }: { transactions: any[]}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell>{new Date(tx.date).toLocaleDateString()}</TableCell>
            <TableCell>{tx.description}</TableCell>
            <TableCell className="text-right text-cyan-200">${tx.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TransactionsTable;
