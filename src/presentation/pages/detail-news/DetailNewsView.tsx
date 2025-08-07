import * as React from "react";
import type { News } from "@domain/entities/News";
import { Divider, Flex, Image, Typography } from "antd";
import { Link } from "react-router";
import commonStyle from "@presentation/styles/Common.module.css";

function sanitizeHtmlToText(html: string): string {
  const withoutTags = html.replace(/<[^>]*>/g, '');
  const cleaned = withoutTags.replace(/[\r\n]+/g, ' ').trim();
  return cleaned;
}

export default function DetailNewsView() {
  const detailNews = JSON.parse(
    sessionStorage.getItem("NEWS_DETAIL") || "{}"
  ) as News;

  React.useEffect(() => {
  return () => {
    sessionStorage.removeItem("NEWS_DETAIL");
  }
  }, []);

  return (
    <>
      <section>
        <Link to="/" className={commonStyle.buttonLink}>
          Back to Home {"->"}
        </Link>

        <div style={{ marginTop: "1rem" }}>
          <Image
            src={detailNews?.urlToImage}
            alt={`Cover for ${detailNews?.title}`}
            style={{
              borderRadius: ".5rem",
            }}
            preview={false}
          />

          <Typography.Title level={1}>{detailNews?.title}</Typography.Title>

          <Flex justify="space-between" align="center">
            <Typography.Paragraph style={{ fontWeight: "500" }} italic>
              {detailNews?.source.name} / {detailNews?.author}
            </Typography.Paragraph>
            <Typography.Paragraph style={{ fontWeight: "500" }} italic>
              Published At:{" "}
              {new Date(detailNews?.publishedAt).toLocaleDateString()}
            </Typography.Paragraph>
          </Flex>
        </div>
      </section>

      <Divider
        size="middle"
        style={{ borderColor: "oklch(43.9% 0 0)", margin: "1rem 0" }}
      />

      <section>
        <Typography.Paragraph>
          {detailNews?.description || "No description available."}
        </Typography.Paragraph>
        <Typography.Paragraph>
          {sanitizeHtmlToText(detailNews?.content) || "No content available."}
        </Typography.Paragraph>
        <Typography.Link href={detailNews?.url} target="_blank" rel="noopener noreferrer">
          Read More...
        </Typography.Link>
      </section>
    </>
  );
}
