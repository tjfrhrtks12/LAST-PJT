// 시각화용 데이터 생성 함수들
export const generateStudentStats = () => {
  return {
    totalStudents: 150,
    averageGrade: 3.2,
    attendanceRate: 94.5,
    subjects: [
      { name: '국어', average: 85.2, students: 150 },
      { name: '수학', average: 78.9, students: 150 },
      { name: '영어', average: 82.1, students: 150 },
      { name: '과학', average: 79.8, students: 150 },
      { name: '사회', average: 83.5, students: 150 }
    ],
    recentActivities: [
      { type: '시험', count: 3, date: '2024-01-15' },
      { type: '과제', count: 12, date: '2024-01-14' },
      { type: '출석', count: 142, date: '2024-01-13' }
    ]
  };
};

export const generateAttendanceChart = () => {
  return {
    totalDays: 20,
    attendanceData: [
      { day: '1일', present: 145, absent: 3, late: 2 },
      { day: '2일', present: 147, absent: 1, late: 2 },
      { day: '3일', present: 144, absent: 4, late: 2 },
      { day: '4일', present: 146, absent: 2, late: 2 },
      { day: '5일', present: 148, absent: 1, late: 1 },
      { day: '6일', present: 143, absent: 5, late: 2 },
      { day: '7일', present: 145, absent: 3, late: 2 },
      { day: '8일', present: 147, absent: 1, late: 2 },
      { day: '9일', present: 144, absent: 4, late: 2 },
      { day: '10일', present: 146, absent: 2, late: 2 },
      { day: '11일', present: 148, absent: 1, late: 1 },
      { day: '12일', present: 143, absent: 5, late: 2 },
      { day: '13일', present: 145, absent: 3, late: 2 },
      { day: '14일', present: 147, absent: 1, late: 2 },
      { day: '15일', present: 144, absent: 4, late: 2 },
      { day: '16일', present: 146, absent: 2, late: 2 },
      { day: '17일', present: 148, absent: 1, late: 1 },
      { day: '18일', present: 143, absent: 5, late: 2 },
      { day: '19일', present: 145, absent: 3, late: 2 },
      { day: '20일', present: 147, absent: 1, late: 2 }
    ],
    summary: {
      totalPresent: 2900,
      totalAbsent: 50,
      totalLate: 40,
      averageAttendance: 94.5
    }
  };
};

export const generateGradeAnalysis = () => {
  return {
    studentInfo: {
      name: '김철수',
      grade: '1학년',
      class: '1반',
      studentNumber: '4번'
    },
    examResults: [
      {
        exam: '1학기 중간고사',
        date: '2024-04-15',
        subjects: [
          { name: '국어', score: 85, grade: 'B+', rank: 12 },
          { name: '수학', score: 92, grade: 'A', rank: 5 },
          { name: '영어', score: 78, grade: 'C+', rank: 25 },
          { name: '과학', score: 88, grade: 'B+', rank: 8 }
        ]
      },
      {
        exam: '1학기 기말고사',
        date: '2024-06-20',
        subjects: [
          { name: '국어', score: 88, grade: 'B+', rank: 10 },
          { name: '수학', score: 95, grade: 'A+', rank: 3 },
          { name: '영어', score: 82, grade: 'B', rank: 18 },
          { name: '과학', score: 90, grade: 'A', rank: 6 }
        ]
      }
    ],
    subjectPerformance: [
      { name: '국어', average: 86.5, improvement: '+3', rank: 11 },
      { name: '수학', average: 93.5, improvement: '+3', rank: 4 },
      { name: '영어', average: 80.0, improvement: '+4', rank: 22 },
      { name: '과학', average: 89.0, improvement: '+2', rank: 7 }
    ],
    overallStats: {
      totalAverage: 87.25,
      classRank: 8,
      gradeRank: 15,
      improvement: '+3.25'
    }
  };
};

export const generateScheduleData = () => {
  return {
    currentWeek: '2024년 1월 3주차',
    events: [
      {
        date: '2024-01-15',
        day: '월요일',
        events: [
          { time: '09:00', title: '아침조회', type: 'routine' },
          { time: '14:00', title: '학부모 상담', type: 'meeting' },
          { time: '16:00', title: '동아리 활동', type: 'activity' }
        ]
      },
      {
        date: '2024-01-16',
        day: '화요일',
        events: [
          { time: '09:00', title: '아침조회', type: 'routine' },
          { time: '10:30', title: '교직원 회의', type: 'meeting' },
          { time: '15:00', title: '학생 상담', type: 'counseling' }
        ]
      },
      {
        date: '2024-01-17',
        day: '수요일',
        events: [
          { time: '09:00', title: '아침조회', type: 'routine' },
          { time: '13:00', title: '시험 감독', type: 'exam' },
          { time: '17:00', title: '과제 검토', type: 'work' }
        ]
      },
      {
        date: '2024-01-18',
        day: '목요일',
        events: [
          { time: '09:00', title: '아침조회', type: 'routine' },
          { time: '11:00', title: '수업 준비', type: 'work' },
          { time: '16:00', title: '동아리 활동', type: 'activity' }
        ]
      },
      {
        date: '2024-01-19',
        day: '금요일',
        events: [
          { time: '09:00', title: '아침조회', type: 'routine' },
          { time: '14:00', title: '학부모 상담', type: 'meeting' },
          { time: '15:30', title: '주간 정리', type: 'work' }
        ]
      }
    ],
    upcomingEvents: [
      { date: '2024-01-22', title: '학기말 시험', type: 'exam' },
      { date: '2024-01-25', title: '학부모 총회', type: 'meeting' },
      { date: '2024-01-30', title: '동아리 발표회', type: 'activity' }
    ]
  };
}; 