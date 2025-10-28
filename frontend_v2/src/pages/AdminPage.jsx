import React, { useState } from 'react';
import './AdminPage.css';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [services, setServices] = useState([
    { id: 1, name: 'Netflix', status: 'active', users: 1234, apiHealth: 98 },
    { id: 2, name: 'Disney+', status: 'active', users: 856, apiHealth: 95 },
    { id: 3, name: 'TVING', status: 'active', users: 623, apiHealth: 92 },
    { id: 4, name: 'Wavve', status: 'maintenance', users: 445, apiHealth: 0 },
    { id: 5, name: 'YouTube', status: 'active', users: 2103, apiHealth: 99 },
  ]);

  const [systemMetrics] = useState({
    totalUsers: 5261,
    activeNow: 842,
    totalContent: 15234,
    apiCalls: 234567,
    uptime: 99.8,
    responseTime: 45
  });

  const [recentActivities] = useState([
    { id: 1, type: 'user', action: '새로운 사용자 가입', time: '2분 전', user: 'user@email.com' },
    { id: 2, type: 'system', action: 'API 연동 성공', time: '15분 전', service: 'Netflix' },
    { id: 3, type: 'error', action: 'Wavve API 오류', time: '1시간 전', service: 'Wavve' },
    { id: 4, type: 'user', action: '구독 서비스 연결', time: '2시간 전', user: 'another@email.com' },
    { id: 5, type: 'system', action: '시스템 업데이트 완료', time: '3시간 전', service: 'System' },
  ]);

  const toggleServiceStatus = (serviceId) => {
    setServices(prev =>
      prev.map(service =>
        service.id === serviceId
          ? { ...service, status: service.status === 'active' ? 'inactive' : 'active' }
          : service
      )
    );
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'user': return '👤';
      case 'system': return '⚙️';
      case 'error': return '⚠️';
      default: return '📌';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#22c55e';
      case 'inactive': return '#ef4444';
      case 'maintenance': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">관리자 대시보드</h1>
          <div className="admin-actions">
            <button className="admin-btn primary">시스템 설정</button>
            <button className="admin-btn secondary">로그 보기</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="admin-tabs">
          <button
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            개요
          </button>
          <button
            className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            서비스 관리
          </button>
          <button
            className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`}
            onClick={() => setActiveTab('activities')}
          >
            활동 로그
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-icon">👥</div>
                <div className="metric-value">{systemMetrics.totalUsers.toLocaleString()}</div>
                <div className="metric-label">총 사용자</div>
                <div className="metric-change positive">+12% 이번 달</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">🟢</div>
                <div className="metric-value">{systemMetrics.activeNow.toLocaleString()}</div>
                <div className="metric-label">현재 접속자</div>
                <div className="metric-change positive">+5% 지난 시간</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">🎬</div>
                <div className="metric-value">{systemMetrics.totalContent.toLocaleString()}</div>
                <div className="metric-label">총 콘텐츠</div>
                <div className="metric-change positive">+234 오늘</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">⚡</div>
                <div className="metric-value">{systemMetrics.apiCalls.toLocaleString()}</div>
                <div className="metric-label">API 호출</div>
                <div className="metric-change">오늘</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">⏱️</div>
                <div className="metric-value">{systemMetrics.uptime}%</div>
                <div className="metric-label">시스템 가동률</div>
                <div className="metric-change positive">안정적</div>
              </div>
              <div className="metric-card">
                <div className="metric-icon">📊</div>
                <div className="metric-value">{systemMetrics.responseTime}ms</div>
                <div className="metric-label">평균 응답시간</div>
                <div className="metric-change positive">우수</div>
              </div>
            </div>

            <div className="charts-section">
              <div className="chart-card">
                <h3 className="chart-title">서비스별 사용자 분포</h3>
                <div className="chart-placeholder">
                  <div className="bar-chart">
                    {services.map(service => (
                      <div key={service.id} className="bar-item">
                        <div className="bar-label">{service.name}</div>
                        <div className="bar-wrapper">
                          <div
                            className="bar-fill"
                            style={{ width: `${(service.users / 2500) * 100}%` }}
                          >
                            <span className="bar-value">{service.users}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="tab-content">
            <div className="services-table">
              <table>
                <thead>
                  <tr>
                    <th>서비스</th>
                    <th>상태</th>
                    <th>사용자 수</th>
                    <th>API 상태</th>
                    <th>동작</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map(service => (
                    <tr key={service.id}>
                      <td className="service-name-cell">
                        <span className="service-name-text">{service.name}</span>
                      </td>
                      <td>
                        <span
                          className="status-badge"
                          style={{ backgroundColor: getStatusColor(service.status) }}
                        >
                          {service.status === 'active' ? '활성' : service.status === 'maintenance' ? '점검중' : '비활성'}
                        </span>
                      </td>
                      <td>{service.users.toLocaleString()}</td>
                      <td>
                        <div className="api-health">
                          <div className="health-bar">
                            <div
                              className="health-fill"
                              style={{
                                width: `${service.apiHealth}%`,
                                backgroundColor: service.apiHealth > 90 ? '#22c55e' : service.apiHealth > 70 ? '#f59e0b' : '#ef4444'
                              }}
                            ></div>
                          </div>
                          <span className="health-text">{service.apiHealth}%</span>
                        </div>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="action-btn"
                            onClick={() => toggleServiceStatus(service.id)}
                          >
                            {service.status === 'active' ? '중지' : '시작'}
                          </button>
                          <button className="action-btn secondary">설정</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="service-actions-panel">
              <h3 className="panel-title">서비스 관리 작업</h3>
              <div className="action-grid">
                <button className="action-card">
                  <div className="action-card-icon">➕</div>
                  <div className="action-card-text">새 서비스 추가</div>
                </button>
                <button className="action-card">
                  <div className="action-card-icon">🔄</div>
                  <div className="action-card-text">모든 서비스 동기화</div>
                </button>
                <button className="action-card">
                  <div className="action-card-icon">📊</div>
                  <div className="action-card-text">상태 보고서</div>
                </button>
                <button className="action-card">
                  <div className="action-card-icon">⚙️</div>
                  <div className="action-card-text">일괄 설정</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Activities Tab */}
        {activeTab === 'activities' && (
          <div className="tab-content">
            <div className="activities-header">
              <h3 className="activities-title">최근 활동</h3>
              <div className="activities-filters">
                <select className="filter-select">
                  <option value="all">모든 활동</option>
                  <option value="user">사용자</option>
                  <option value="system">시스템</option>
                  <option value="error">오류</option>
                </select>
                <button className="filter-btn">필터 적용</button>
              </div>
            </div>

            <div className="activities-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">{getActivityIcon(activity.type)}</div>
                  <div className="activity-content">
                    <div className="activity-action">{activity.action}</div>
                    <div className="activity-meta">
                      {activity.user && <span>{activity.user}</span>}
                      {activity.service && <span>{activity.service}</span>}
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                  <button className="activity-detail-btn">상세</button>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button className="pagination-btn">이전</button>
              <span className="pagination-info">1 / 10</span>
              <button className="pagination-btn">다음</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;