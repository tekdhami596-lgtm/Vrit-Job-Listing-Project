import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function JobCardSkeleton() {
  return (
    <div className="job-card p-6 border rounded-lg shadow-sm bg-white max-w-md">
      <div className="mb-2">
        <Skeleton width={280} height={28} />
      </div>

      <div className="mb-6">
        <Skeleton width={120} height={16} />
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2">
          <Skeleton width={16} height={16} />
          <Skeleton width={140} height={14} />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton width={16} height={16} />
          <Skeleton width={80} height={14} />
        </div>
      </div>

      <div className="flex justify-between gap-5">
        <Skeleton width={140} height={48} borderRadius={8} />
        <Skeleton width={140} height={48} borderRadius={8} />
      </div>
    </div>
  );
}

export default JobCardSkeleton;
