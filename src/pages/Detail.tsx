import Flex from "../components/Flex";
import ProductPerformanceChart from "../components/ProductPerformanceChart";
import ScatterChartBox from "../components/ScatterChartBox";
import SegmentChart from "../components/SegmentChart";
import SubCategoryChart from "../components/SubCategoryChart";
import useAnalyticController from "../controllers/analytic.controller";

const Detail = () => {
  const { useGetAnalyticDetailService } = useAnalyticController();

  const { finalData } = useGetAnalyticDetailService();

  return (
    <Flex className="gap-3.5 px-6 py-3.5">
      <div className="grid grid-cols-2 gap-4.5">
        <ScatterChartBox chartData={finalData.profits} />

        <SubCategoryChart chartData={finalData.subCategories} />
      </div>

      <div className="grid grid-cols-2 gap-4.5">
        <SegmentChart chartData={finalData.segments} />

        <ProductPerformanceChart chartData={finalData.performances} />
      </div>
    </Flex>
  );
};

export default Detail;
