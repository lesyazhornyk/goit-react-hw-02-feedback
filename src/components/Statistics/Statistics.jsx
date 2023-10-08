import { StatisticsLine } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div style={{ marginTop: '5px' }}>
      <StatisticsLine>Good: {good}</StatisticsLine>
      <StatisticsLine>Neutral: {neutral}</StatisticsLine>
      <StatisticsLine>Bad: {bad}</StatisticsLine>
      <StatisticsLine>Total: {total}</StatisticsLine>
      <StatisticsLine>Positive feedback: {positivePercentage}%</StatisticsLine>
    </div>
  );
};

export default Statistics;
