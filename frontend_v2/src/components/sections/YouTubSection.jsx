import React, { useState, useEffect } from 'react';
import ContentRow from '../common/ContentRow';
import { getServiceData } from '../../utils/api';
import './ServiceSection.css';

const YouTubeSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServiceData('youtube').then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  const handleContentClick = (content) => {
    alert(`${data.name}에서 "${content.title || content.name}" 재생하기`);
  };

  if (loading) return <div className="section-loading">로딩중...</div>;
  if (!data) return null;

  return (
    <section className="service-section" style={{ borderColor: data.color }}>
      <div className="section-header">
        <span className="service-logo">{data.logo}</span>
        <h2 className="service-name">{data.name}</h2>
        <button 
          className="open-service-btn"
          style={{ background: data.color }}
          onClick={() => alert(`${data.name} 앱 열기`)}
        >
          앱에서 열기
        </button>
      </div>

      <ContentRow
        title="시청 중인 동영상"
        items={data.watchingNow}
        type="watching"
        onItemClick={handleContentClick}
      />

      <ContentRow
        title="구독 채널"
        items={data.subscriptions}
        type="subscription"
        onItemClick={handleContentClick}
      />
    </section>
  );
};

export default YouTubeSection;