import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardAnalyticSkeleton = () => {
  return (
    <div className="grid! grid-cols-4 gap-4.5">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index.toString()} className="col-span-1">
          <Skeleton height={116} borderRadius={8} />
        </div>
      ))}
    </div>
  );
};

export default CardAnalyticSkeleton;
