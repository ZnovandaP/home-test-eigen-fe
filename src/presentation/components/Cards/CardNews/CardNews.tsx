import type { News } from '@domain/entities/News';
import { useHandleNewsDetail } from '@presentation/hooks/useHandleNewsDetail';
import { Row, Col, Card, Typography, Image, Empty } from 'antd';

const headlineImageCard: React.CSSProperties = {
  borderRadius: '.5rem .5rem 0 0',
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  objectPosition: 'center',
};

export interface CardNewsProps {
  newsList: News[]
}

export default function CardNews({ newsList, ...props }: CardNewsProps) {

  const {handle} = useHandleNewsDetail();
  
  return newsList.length > 0 ? (
    <Row gutter={[16, 16]}>
      {newsList.map((news) => (
        <Col key={news.title} xs={24} sm={12} md={8}>
            <Card
              {...props}
              onClick={() => handle(news)}
              hoverable
              cover={
                <Image
                  src={news.urlToImage}
                  alt={`News Cover for ${news.title}`}
                  preview={false}
                  style={headlineImageCard}
                />
              }
            >
              <div className="">
                <Typography.Title
                  ellipsis={{ rows: 1 }}
                  level={5}
                  style={{ margin: '0', padding: '0' }}
                >
                  {news.title}
                </Typography.Title>
                <Typography.Paragraph
                  ellipsis={{ rows: 2 }}
                  style={{
                    margin: '0.5rem 0',
                    color: 'rgba(0, 0, 0, 0.7)',
                  }}
                >
                  {news.description || 'No description available.'}
                </Typography.Paragraph>
                <Typography.Text
                  style={{
                    textAlign: 'left',
                    margin: '0',
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontSize: '12px',
                  }}
                >
                  Published At:
                  {new Date(news.publishedAt).toLocaleDateString()}
                </Typography.Text>
                <Typography.Paragraph
                  italic
                  style={{
                    textAlign: 'left',
                    margin: '0',
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontSize: '12px',
                  }}
                >
                  Source: {news.source.name} - {news.author || 'Unknown Author'}
                </Typography.Paragraph>
              </div>
            </Card>
        </Col>
      ))}
    </Row>
  ) : (
    <Empty
      description={
        <Typography.Title level={5} style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
          No news available at the moment.
        </Typography.Title>
      }
    />
  );
}
