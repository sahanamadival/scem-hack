import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FileText, ArrowLeft, Download } from 'lucide-react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ResumePDF from '../../components/ResumePDF';
import { toast } from 'react-hot-toast';

interface ResumeFormData {
  resumeName: string;
  description: string;
  skills: string;
  workExperience: string;
  education: string;
  trainingExperience: string;
  awards: string;
}

const ResumeBuilderPage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const profileData = state?.profileData;
  const [formData, setFormData] = useState<ResumeFormData | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<ResumeFormData>({
    defaultValues: {
      resumeName: `${profileData?.desiredRole || 'My'} Resume`,
      description: profileData?.about || '',
      skills: profileData?.skills || '',
      workExperience: '',
      education: '',
      trainingExperience: '',
      awards: ''
    }
  });

  const onSubmit = (data: ResumeFormData) => {
    setFormData(data);
    toast.success('Resume generated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 mb-6 hover:text-blue-800"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Profile
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {!formData ? (
            <>
              <div className="bg-blue-600 px-6 py-4">
                <h1 className="text-xl font-bold text-white flex items-center">
                  <FileText className="mr-2" />
                  Build Your Resume
                </h1>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                {/* Description Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Professional Description*
                  </label>
                  <textarea
                    {...register('description', { required: 'Professional description is required' })}
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Describe your professional background and key qualifications"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
                  )}
                </div>

                {/* Training Experience Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Training Experience*
                  </label>
                  <textarea
                    {...register('trainingExperience', { required: 'Training experience is required' })}
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Detail your relevant training, certifications, and professional development"
                  />
                  {errors.trainingExperience && (
                    <p className="text-red-500 text-xs mt-1">{errors.trainingExperience.message}</p>
                  )}
                </div>

                {/* Skills Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills*
                  </label>
                  <textarea
                    {...register('skills', { required: 'Skills are required' })}
                    rows={3}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="List your key skills separated by commas"
                  />
                  {errors.skills && (
                    <p className="text-red-500 text-xs mt-1">{errors.skills.message}</p>
                  )}
                </div>

                {/* Work Experience Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Work Experience*
                  </label>
                  <textarea
                    {...register('workExperience', { required: 'Work experience is required' })}
                    rows={6}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Detail your work history with responsibilities and achievements"
                  />
                  {errors.workExperience && (
                    <p className="text-red-500 text-xs mt-1">{errors.workExperience.message}</p>
                  )}
                </div>

                {/* Awards & Recognition Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Awards & Recognition
                  </label>
                  <textarea
                    {...register('awards')}
                    rows={3}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="List any awards, honors, or special recognition received"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                  >
                    Generate Resume
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Your Resume is Ready!</h2>
                <PDFDownloadLink
                  document={<ResumePDF data={formData} profileData={profileData} />}
                  fileName={`${formData.resumeName.replace(/\s+/g, '_')}.pdf`}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center"
                >
                  <Download className="mr-2" size={18} />
                  Download PDF
                </PDFDownloadLink>
              </div>

              <div className="border rounded-md overflow-hidden" style={{ height: '700px' }}>
                <PDFViewer width="100%" height="100%">
                  <ResumePDF data={formData} profileData={profileData} />
                </PDFViewer>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setFormData(null)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
                >
                  Edit Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderPage;