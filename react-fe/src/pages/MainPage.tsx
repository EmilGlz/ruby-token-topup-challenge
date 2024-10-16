import { useState } from 'react';
import { processUsers } from '../api';

interface User {
  first_name: string;
  last_name: string;
  email: string;
  previous_token_balance: number;
  new_token_balance: number;
}

interface Company {
  company_id: string;
  company_name: string;
  users_emailed: User[];
  users_not_emailed: User[];
  total_top_up: number;
}

const MainPage: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [processed, setProcessed] = useState(false);
  const handleProcess = async () => {
    setLoading(true); 
    try {
      const companiesData = await processUsers();
      setCompanies(companiesData);
      setProcessed(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Company Top Ups</h1>
      {!processed ? (
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleProcess}
          >
            {loading ? 'Processing...' : 'Process'}
          </button>
        </div>
      ) : (
        <>
          {companies.length === 0 ? (
            <p className="text-center text-gray-500">No data available.</p>
          ) : (
            companies.map((company) => (
              <div key={company.company_id} className="bg-white shadow-md rounded-lg p-4 mb-6">
                <h2 className="text-2xl font-semibold text-blue-600">
                  {company.company_name} (ID: {company.company_id})
                </h2>
                <h3 className="text-xl font-semibold mt-4">Users Emailed:</h3>
                {company.users_emailed.length > 0 ? (
                  <ul className="list-disc list-inside ml-5">
                    {company.users_emailed.map((user, index) => (
                      <li key={index} className="py-1">
                        <span className="font-semibold">{user.first_name} {user.last_name}</span> 
                        <span className="text-gray-600"> ({user.email})</span>
                        <span className="block text-sm text-gray-500">Previous Balance: {user.previous_token_balance}, New Balance: {user.new_token_balance}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No users emailed.</p>
                )}
                <h3 className="text-xl font-semibold mt-4">Users Not Emailed:</h3>
                {company.users_not_emailed.length > 0 ? (
                  <ul className="list-disc list-inside ml-5">
                    {company.users_not_emailed.map((user, index) => (
                      <li key={index} className="py-1">
                        <span className="font-semibold">{user.first_name} {user.last_name}</span> 
                        <span className="text-gray-600"> ({user.email})</span>
                        <span className="block text-sm text-gray-500">Previous Balance: {user.previous_token_balance}, New Balance: {user.new_token_balance}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No users not emailed.</p>
                )}
                <h3 className="text-xl font-semibold mt-4">Total Amount of Top Ups: 
                  <span className="text-green-500 font-bold"> {company.total_top_up}</span>
                </h3>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default MainPage;
