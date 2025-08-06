import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const SkillTranslation = () => {
  const [militarySkill, setMilitarySkill] = useState('');
  const [chartData, setChartData] = useState<{ role: string; salary: number }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // MOCK Job Search API call - replace with your real API call
  const fetchJobsBySkill = async (skill: string) => {
    // Example response - replace with actual API call
    const mockJobs = {
      leadership: [
        { title: 'Operations Manager' },
        { title: 'Project Coordinator' },
        { title: 'Team Lead' },
      ],
      logistics: [
        { title: 'Supply Chain Manager' },
        { title: 'Warehouse Supervisor' },
        { title: 'Procurement Analyst' },
      ],
      technical: [
        { title: 'Maintenance Engineer' },
        { title: 'Field Service Technician' },
        { title: 'Quality Control Officer' },
      ],
      strategy: [
        { title: 'Business Analyst' },
        { title: 'Strategic Planner' },
        { title: 'Policy Advisor' },
      ],
    };

    // Simulate API delay
    return new Promise<{ title: string }[]>((resolve) => {
      setTimeout(() => {
        resolve(mockJobs[skill.toLowerCase()] || []);
      }, 700);
    });
  };

  // MOCK Salary API call - replace with your real API call
  const fetchSalaryForJob = async (jobTitle: string) => {
    // Mock salaries - in INR
    const mockSalaries: Record<string, number> = {
      'Operations Manager': 900000,
      'Project Coordinator': 750000,
      'Team Lead': 800000,
      'Supply Chain Manager': 850000,
      'Warehouse Supervisor': 600000,
      'Procurement Analyst': 700000,
      'Maintenance Engineer': 720000,
      'Field Service Technician': 650000,
      'Quality Control Officer': 700000,
      'Business Analyst': 850000,
      'Strategic Planner': 900000,
      'Policy Advisor': 870000,
    };

    // Simulate API delay
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(mockSalaries[jobTitle] || 500000);
      }, 500);
    });
  };

  const handleFindJobs = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setChartData([]);

    try {
      const jobs = await fetchJobsBySkill(militarySkill);
      if (jobs.length === 0) {
  setError(`No jobs found for skill "${militarySkill}". Try: leadership, logistics, technical, strategy.`);
        setLoading(false);
        return;
      }

      // Fetch salary for each job in parallel
      const results = await Promise.all(
        jobs.map(async (job) => {
          const salary = await fetchSalaryForJob(job.title);
          return { role: job.title, salary };
        })
      );

      setChartData(results);
    } catch (err) {
      setError('Error fetching job or salary data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Skill Translation for Veterans</h1>
      <form onSubmit={handleFindJobs} className="mb-6">
        <input
          type="text"
          placeholder="Enter military skill (e.g., leadership)"
          value={militarySkill}
          onChange={(e) => setMilitarySkill(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Finding Jobs...' : 'Find Civilian Jobs'}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {chartData.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Matching Civilian Roles & Estimated Salaries</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="role"
                angle={-15}
                textAnchor="end"
                interval={0}
                height={80}
              />
<YAxis tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
<Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
<Bar dataKey="salary" fill="#3b82f6" />

            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};
export default SkillTranslation;