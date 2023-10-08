import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(state => (
        <Button key={state} type="button" onClick={() => onLeaveFeedback(state)}>
          {state[0].toUpperCase() + state.slice(1)}
        </Button>
      ))}
    </>
  );
};

export default FeedbackOptions;
