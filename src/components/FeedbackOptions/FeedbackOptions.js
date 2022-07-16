import PropTypes from 'prop-types';
import { FeedbackOptionsStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(key => (
    <FeedbackOptionsStyled
      key={key}
      type="button"
      onClick={() => onLeaveFeedback(key)}
    >
      {key.charAt(0).toUpperCase() + key.slice(1)}
    </FeedbackOptionsStyled>
  ));
};

FeedbackOptions.prototype = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
