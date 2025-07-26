// 보고서 양식 템플릿 데이터
export const reportTemplates = [
  {
    id: 'student-individual',
    name: '학생 개별 성적 보고서',
    description: '개별 학생의 성적과 출석 현황을 종합적으로 분석한 보고서',
    icon: '👤',
    category: 'student',
    template: `
# 학생 개별 성적 보고서

## 👤 학생 정보
- **이름**: {studentName}
- **학년/반**: {grade} {class}
- **번호**: {studentNumber}
- **보고서 작성일**: {reportDate}

## 📊 전체 성적 현황
- **전체 평균**: {totalAverage}점
- **반 순위**: {classRank}위 / {totalStudents}명
- **학년 순위**: {gradeRank}위
- **성적 향상도**: {improvement}

## 📝 과목별 성적 분석
{subjectGrades}

## 📈 성적 추이 분석
{gradeTrend}

## 📅 출석 현황
- **전체 출석률**: {attendanceRate}%
- **지각**: {lateCount}회
- **조퇴**: {earlyLeaveCount}회
- **결석**: {absentCount}회

## 💡 학습 지도 방향
{guidance}

---
*보고서 작성자: 담임교사*
*작성일: {reportDate}*
    `
  },
  {
    id: 'class-overview',
    name: '반 전체 현황 보고서',
    description: '전체 반의 성적과 출석 현황을 종합적으로 분석한 보고서',
    icon: '👥',
    category: 'class',
    template: `
# 반 전체 현황 보고서

## 📊 반 기본 정보
- **반**: {grade}학년 {class}반
- **총 학생 수**: {totalStudents}명
- **보고서 작성일**: {reportDate}

## 📈 전체 성적 현황
- **반 평균**: {classAverage}점
- **학년 평균 대비**: {gradeComparison}
- **최고점**: {highestScore}점
- **최저점**: {lowestScore}점

## 📊 성적 분포
{gradeDistribution}

## 📅 출석 현황
- **평균 출석률**: {averageAttendance}%
- **전체 출석**: {totalPresent}명
- **전체 결석**: {totalAbsent}명
- **전체 지각**: {totalLate}명

## 🏆 우수 학생 현황
{excellentStudents}

## 📋 개선이 필요한 학생 현황
{improvementStudents}

## 💡 반 전체 지도 방향
{guidance}

---
*보고서 작성자: 담임교사*
*작성일: {reportDate}*
    `
  },
  {
    id: 'attendance-analysis',
    name: '출석 현황 분석 보고서',
    description: '학생들의 출석 패턴과 결석 원인을 분석한 보고서',
    icon: '📅',
    category: 'attendance',
    template: `
# 출석 현황 분석 보고서

## 📊 출석 개요
- **분석 기간**: {period}
- **총 출석일**: {totalDays}일
- **평균 출석률**: {averageAttendance}%
- **보고서 작성일**: {reportDate}

## 📈 일별 출석 현황
{dailyAttendance}

## 📊 출석 유형별 분석
- **정상 출석**: {normalAttendance}명 ({normalPercentage}%)
- **지각**: {lateCount}명 ({latePercentage}%)
- **조퇴**: {earlyLeaveCount}명 ({earlyLeavePercentage}%)
- **결석**: {absentCount}명 ({absentPercentage}%)

## 🔍 결석 원인 분석
{absenceReasons}

## 📋 출석 관리 개선 방안
{improvementPlan}

## 💡 출석 지도 방향
{guidance}

---
*보고서 작성자: 담임교사*
*작성일: {reportDate}*
    `
  },
  {
    id: 'grade-analysis',
    name: '성적 분석 보고서',
    description: '과목별 성적 분포와 학습 성취도를 분석한 보고서',
    icon: '📊',
    category: 'grade',
    template: `
# 성적 분석 보고서

## 📊 성적 개요
- **분석 기간**: {period}
- **평가 유형**: {examType}
- **총 응시 학생**: {totalStudents}명
- **보고서 작성일**: {reportDate}

## 📈 과목별 성적 현황
{subjectAnalysis}

## 📊 성적 분포 분석
{gradeDistribution}

## 🏆 우수 학생 현황
{excellentStudents}

## 📋 개선이 필요한 학생 현황
{improvementStudents}

## 📈 성적 향상도 분석
{improvementAnalysis}

## 💡 학습 지도 방향
{guidance}

---
*보고서 작성자: 담임교사*
*작성일: {reportDate}*
    `
  },
  {
    id: 'schedule-report',
    name: '일정 관리 보고서',
    description: '학급 일정과 주요 행사 현황을 정리한 보고서',
    icon: '📋',
    category: 'schedule',
    template: `
# 일정 관리 보고서

## 📅 일정 개요
- **보고 기간**: {period}
- **총 일정 수**: {totalEvents}건
- **보고서 작성일**: {reportDate}

## 📋 이번 주 주요 일정
{weeklySchedule}

## 🎯 예정된 주요 행사
{upcomingEvents}

## 📊 일정 유형별 분석
{eventTypeAnalysis}

## 📈 일정 완료 현황
{completionStatus}

## 💡 일정 관리 개선 방안
{improvementPlan}

## 📋 다음 주 예정 일정
{nextWeekSchedule}

---
*보고서 작성자: 담임교사*
*작성일: {reportDate}*
    `
  }
];

// 보고서 카테고리별 필터링
export const getTemplatesByCategory = (category) => {
  if (!category) return reportTemplates;
  return reportTemplates.filter(template => template.category === category);
};

// 보고서 템플릿에서 실제 데이터로 치환하는 함수
export const generateReportFromTemplate = (template, data) => {
  let reportContent = template.template;
  
  // 기본 정보 치환
  const replacements = {
    '{reportDate}': new Date().toLocaleDateString('ko-KR'),
    '{studentName}': data?.studentInfo?.name || '학생명',
    '{grade}': data?.studentInfo?.grade || '1학년',
    '{class}': data?.studentInfo?.class || '1반',
    '{studentNumber}': data?.studentInfo?.studentNumber || '1번',
    '{totalStudents}': data?.totalStudents || '30명',
    '{period}': '2024년 1학기',
    '{examType}': '중간고사',
    '{totalEvents}': data?.events?.length || 5,
    '{totalAverage}': data?.overallStats?.totalAverage || '85.5',
    '{classRank}': data?.overallStats?.classRank || '5',
    '{gradeRank}': data?.overallStats?.gradeRank || '12',
    '{improvement}': data?.overallStats?.improvement || '+2.5',
    '{averageAttendance}': data?.summary?.averageAttendance || '94.5',
    '{totalPresent}': data?.summary?.totalPresent || '28',
    '{totalAbsent}': data?.summary?.totalAbsent || '2',
    '{totalLate}': data?.summary?.totalLate || '1'
  };

  // 데이터 기반 치환
  if (data) {
    if (data.overallStats) {
      replacements['{totalAverage}'] = data.overallStats.totalAverage || '평균';
      replacements['{classRank}'] = data.overallStats.classRank || '순위';
      replacements['{gradeRank}'] = data.overallStats.gradeRank || '순위';
      replacements['{improvement}'] = data.overallStats.improvement || '향상도';
    }
    
    if (data.summary) {
      replacements['{averageAttendance}'] = data.summary.averageAttendance || '출석률';
      replacements['{totalPresent}'] = data.summary.totalPresent || '출석';
      replacements['{totalAbsent}'] = data.summary.totalAbsent || '결석';
      replacements['{totalLate}'] = data.summary.totalLate || '지각';
    }
  }

  // 모든 치환 수행
  Object.keys(replacements).forEach(key => {
    reportContent = reportContent.replace(new RegExp(key, 'g'), replacements[key]);
  });

  // 추가 placeholder 텍스트 치환
  reportContent = reportContent.replace(/\{subjectGrades\}/g, 
    data ? '실제 과목별 성적 데이터가 여기에 표시됩니다.' : 
    '- **국어**: 88점 (B+)\n- **수학**: 92점 (A)\n- **영어**: 85점 (B+)\n- **과학**: 90점 (A)'
  );
  
  reportContent = reportContent.replace(/\{gradeTrend\}/g, 
    data ? '실제 성적 추이 데이터가 여기에 표시됩니다.' : 
    '1학기 중간고사 대비 기말고사 성적이 전반적으로 향상되었습니다.'
  );
  
  reportContent = reportContent.replace(/\{attendanceRate\}/g, '94.5');
  reportContent = reportContent.replace(/\{lateCount\}/g, '1');
  reportContent = reportContent.replace(/\{earlyLeaveCount\}/g, '0');
  reportContent = reportContent.replace(/\{absentCount\}/g, '2');
  
  reportContent = reportContent.replace(/\{guidance\}/g, 
    data ? '실제 지도 방향이 여기에 표시됩니다.' : 
    '수학과 영어 과목에서 더욱 집중적인 학습이 필요하며, 전반적으로 안정적인 성적을 유지하고 있습니다.'
  );

  return reportContent;
}; 