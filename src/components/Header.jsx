import headerLogo from '../assets/quiz-logo.png'

export default function Header () {
  return (
    <header>
      <img src={headerLogo} alt="quiz-logo" />
      <h1>reactquiz</h1>
    </header>
  );
}