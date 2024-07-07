import { TypeAnimation } from 'react-type-animation';

const TypingSpinner = () => {
  return (
    <TypeAnimation
      sequence={[
        'Try to find',
        1000,
        'Try to find something',
        1000,
        'Try to find something interesting ...',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
}

export default TypingSpinner;
