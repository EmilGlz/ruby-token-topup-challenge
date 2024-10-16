import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../api';

const CompaniesPage: React.FC = () => {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadCompanies = async () => {
    setLoading(true);
    setError(null);
    try {
      const companiesData = await fetchCompanies();
      setCompanies(companiesData);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Companies</h1>
      {loading && <p className="text-center text-gray-500">Loading companies...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.length > 0 ? (
          companies.map(company => (
            <div key={company.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
              <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
              <p className="text-gray-700 mb-1"><strong>Top Up:</strong> ${company.top_up}</p>
              <p className="text-gray-700 mb-1">
                <strong>Email Status:</strong> 
                {company.email_status ? (
                  <span className="text-green-500"> Active</span>
                ) : (
                  <span className="text-red-500"> Inactive</span>
                )}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No companies found.</p>
        )}
      </div>
    </div>
  );
};

export default CompaniesPage;
