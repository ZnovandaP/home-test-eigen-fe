import * as React from "react";
import { Divider, Flex, Pagination, Spin, Typography } from "antd";
import { CarouselHeadlineNews } from "@presentation/components/CarouselHeadlineNews/CarouselHeadlineNews";
import CardNews from "@presentation/components/Cards/CardNews/CardNews";
import { useHeadlineNews } from "@presentation/hooks/useHeadlineNews";
import { useEverythingNews } from "@presentation/hooks/useEverythingNews";

export default function HomeView() {
  const [page, setPage] = React.useState(1);
  const { news, loading, totalResults } = useEverythingNews(page);
  const { news: headlineNews, loading: loadingHeadline } = useHeadlineNews();

  return (
    <>
      <section>
        <Spin size="large" spinning={loadingHeadline} tip="Fetching latest news...">
          <CarouselHeadlineNews newsList={headlineNews} />
        </Spin>
      </section>

      <Divider
        orientation="left"
        size="middle"
        style={{ borderColor: "oklch(43.9% 0 0)", margin: "2rem 0" }}
      >
        <Typography.Title
          level={3}
          style={{ textAlign: "left", margin: "0", padding: "0" }}
        >
          Latest News
        </Typography.Title>
      </Divider>

      <section>
        <Spin size="large" spinning={loading} tip="Fetching latest news...">
          <CardNews newsList={news} />
          <Flex justify="end" style={{ marginTop: "2rem" }}>
            <Pagination
              current={page}
              onChange={setPage}
              total={totalResults}
              pageSize={20}
              pageSizeOptions={["20"]}
              showTotal={(total) => `Total ${total} items`}
            />
          </Flex>
        </Spin>
      </section>

    </>
  );
}
