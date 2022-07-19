import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(key => (
    <Button
      key={key}
      type="button"
      onClick={() => onLeaveFeedback(key)}
    >
      {key.charAt(0).toUpperCase() + key.slice(1)}
    </Button>
  ));
};

FeedbackOptions.prototype = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
