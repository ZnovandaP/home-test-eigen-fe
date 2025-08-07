import type { News } from '@domain/entities/News';
import { Carousel, Empty, Image, Typography } from 'antd';
import styles from '@presentation/styles/TopHeadlines.module.css';
import { useHandleNewsDetail } from '@presentation/hooks/useHandleNewsDetail';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  borderRadius: '1rem',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 1,
  cursor: 'pointer',
};

const headlineImageStyle: React.CSSProperties = {
  borderRadius: '1rem',
  width: '100dvw',
  height: '400px',
  objectFit: 'cover',
  objectPosition: 'center',
};

export interface CarouselHeadlineNewsProps {
  newsList: News[];
}

export function CarouselHeadlineNews({ newsList }: CarouselHeadlineNewsProps) {
  const { handle } = useHandleNewsDetail();
  return (
    <Carousel
      autoplay
      autoplaySpeed={2500}
      dots
      arrows
      draggable
      lazyLoad="ondemand"
      style={{ borderRadius: '1rem', maxHeight: '400px' }}
    >
      {newsList.length > 0
        ? newsList.map((news) => (
            <div style={{ borderRadius: '1rem' }} key={news.title}>
              <div
                key={news.title}
                style={contentStyle}
                onClick={() => handle(news)}
                tabIndex={0}
              >
                <Image
                  src={news.urlToImage}
                  alt={`News Cover for ${news.title}`}
                  preview={false}
                  style={headlineImageStyle}
                />

                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <Typography.Title
                      level={5}
                      italic
                      style={{ color: 'white', textAlign: 'left' }}
                    >
                      <Typography.Text
                        style={{
                          color: 'red',
                          textAlign: 'left',
                          fontWeight: 'bolder',
                          fontSize: '1rem',
                        }}
                      >
                        Top Headline:
                      </Typography.Text>{' '}
                      {news.title}
                    </Typography.Title>
                    <Typography.Paragraph
                      style={{
                        textAlign: 'left',
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      {news.description || 'No description available.'}
                    </Typography.Paragraph>

                    <div className="">
                      <Typography.Paragraph
                        style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          textAlign: 'left',
                          margin: '0',
                          fontWeight: 'bold',
                        }}
                      >
                        Source: {news.source.name} -{' '}
                        {news.author || 'Unknown Author'}
                      </Typography.Paragraph>
                      <Typography.Paragraph
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textAlign: 'left',
                          fontSize: '0.8rem',
                        }}
                      >
                        Published At:{' '}
                        {new Date(news.publishedAt).toLocaleDateString()}
                      </Typography.Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : [...Array(5)].map((_, index) => (
            <div style={{ borderRadius: '1rem' }} key={index}>
              <Empty
                style={{backgroundColor: 'rgba(127, 34, 254, .3)', padding: '2rem 0'}}
                description={
                  <Typography.Title
                    level={5}
                    style={{ color: 'rgba(0, 0, 0, 0.5)' }}
                  >
                    No headline news available at the moment.
                  </Typography.Title>
                }
              />
            </div>
          ))}
    </Carousel>
  );
}
