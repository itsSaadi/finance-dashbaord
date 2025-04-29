import { Card } from "@/components/ui/card";

function AccountCard({ account, onClick }: { account: any; onClick: () => void }) {
    return (
        <Card
            className="p-4 transition duration-300 transform hover:scale-105 border border-b-blue-300 hover:border-aqua-500 hover:outline outline-2 outline-aqua-500 hover:shadow-lg cursor-pointer "
            onClick={onClick}
        >
            <h3 className="text-lg font-semibold">{account.name || 'Anonymous User'}</h3>
            <p className="text-sm text-gray-500">Type: <strong>{account.accounttype}</strong> </p>
            <p className="text-xl font-bold text-green-600">${account.balance}</p>
        </Card>
    );
}

export default AccountCard;