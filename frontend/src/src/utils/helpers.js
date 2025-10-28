// src/utils/helpers.js

/**
 * 프로그램을 OTT 플랫폼별로 그룹화
 * @param {Array} programs - 프로그램 배열
 * @returns {Object} - 플랫폼별로 그룹화된 객체
 */
export const groupByPlatform = (programs) => {
  return programs.reduce((acc, program) => {
    if (!acc[program.platform]) {
      acc[program.platform] = [];
    }
    acc[program.platform].push(program);
    return acc;
  }, {});
};

/**
 * 특정 장르의 프로그램 필터링
 * @param {Array} programs - 전체 프로그램 배열
 * @param {String} genre - 필터링할 장르
 * @returns {Array} - 필터링된 프로그램 배열
 */
export const filterByGenre = (programs, genre) => {
  return programs.filter(program => program.genre === genre);
};