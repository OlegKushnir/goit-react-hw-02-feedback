
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(btn => (
    <button
      key={btn}
      type="button"
      onClick={() => {
        onLeaveFeedback(btn);
      }}
    >
      {btn}
    </button>
  ));
};
