import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (total, value) => total + value,
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = (this.state.good / total) * 100;

    return total ? Math.round(percentage) : 0;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          marginLeft: '40px',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback" />
          )}
          {this.countTotalFeedback() > 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
