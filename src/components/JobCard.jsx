import { Briefcase, MapPin } from "lucide-react";
import notify from "../helpers/notify";
import { ToastContainer } from "react-toastify";

export default function JobCard({ job, onView }) {
  const handleApply = (job) => {
    notify.success(
      `Your application for ${job.title} has been received. We'll get back to you soon.`,
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
        <p className="text-base text-gray-600 mb-4">{job.company}</p>

        <div className="text-sm text-gray-600 space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>{job.type}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => handleApply(job)}
          className="flex-1 bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Apply
        </button>
        <ToastContainer />
        <button
          onClick={() => {
            console.log("clicked job:", job);
            onView(job);
          }}
          className="flex-1 bg-white border border-gray-300 text-gray-700 font-medium py-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
