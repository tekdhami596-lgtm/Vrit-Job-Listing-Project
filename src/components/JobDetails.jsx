import { Briefcase, MapPin, X } from "lucide-react";
import notify from "../helpers/notify";
import { ToastContainer } from "react-toastify";

export default function JobDetails({ job, onClose }) {
  if (!job) return null;

  const handleApply = (job) => {
    notify.success(
      `Your application for ${job.title} has been received. We'll get back to you soon.`,
    );
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
    >
      {/* Modal box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full h-full md:w-4/5 md:h-4/5 rounded-none md:rounded-lg p-6 md:p-8 overflow-y-auto relative shadow-lg"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 p-2 rounded-full hover:bg-red-600 cursor-pointer"
        >
          <X size={20} color="black" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-4">Job Details</h2>
        <hr className="mb-4" />

        {/* Job Info */}
        <div className="mb-4">
          <h3 className="text-3xl font-bold mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-1">{job.company}</p>
          <p className="text-gray-600 mb-1 flex flex-row items-center gap-1.5"> <MapPin className="w-4 h-4" />{job.location}</p>
          <p className="text-gray-600 mb-1 flex flex-row items-center gap-1.5"><Briefcase className="w-4 h-4" />{job.type}</p>
        </div>

        {/* Job Description */}
        {job.description && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Job Description</h4>
            <p className="text-gray-700">{job.description}</p>
          </div>
        )}

        {/* Required Skills */}
        {job.skills && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Required Skills</h4>
            <ul className="list-disc list-inside text-gray-700">
              {job.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Apply Button */}
        <div className="mt-6">
          <button
            onClick={() => handleApply(job)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer"
          >
            Apply Now
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
