import CardAnalytic from "../components/CardAnalytic";
import CardAnalyticSkeleton from "../components/CardAnalyticSkeleton";
import ChoiceAnalytic from "../components/ChoiceAnalytic";
import Flex from "../components/Flex";
import LinearAnalytic from "../components/LinearAnalytic";
import LinearAnalyticSkeleton from "../components/LinearAnalyticSkeleton";
import ProductAnalytic from "../components/ProductAnalytic";
import useAnalyticController from "../controllers/analytic.controller";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Dashboard = () => {
  const { useGetAnalyticsService } = useAnalyticController();

  const { finalData, isLoading } = useGetAnalyticsService();

  return (
    <Flex className="gap-3.5 px-6 py-3.5">
      {isLoading ? (
        <CardAnalyticSkeleton />
      ) : (
        <div className="grid! grid-cols-4 gap-4.5">
          {finalData.summaries.map((summary, index) => (
            <CardAnalytic key={index.toString()} data={summary} />
          ))}
        </div>
      )}

      {isLoading ? (
        <LinearAnalyticSkeleton />
      ) : (
        <LinearAnalytic data={finalData.cashflows} />
      )}

      <div className="grid! grid-cols-2 gap-4.5 h-114.5">
        {isLoading ? (
          <>
            <div>
              <Skeleton height="100%" borderRadius={8} />
            </div>

            <div>
              <Skeleton height="100%" borderRadius={8} />
            </div>
          </>
        ) : (
          <>
            <ChoiceAnalytic data={finalData.choices} />

            <ProductAnalytic data={finalData.products} />
          </>
        )}
      </div>
    </Flex>
  );
};

export default Dashboard;
