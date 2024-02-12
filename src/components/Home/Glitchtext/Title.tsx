import styles from './Title.module.css';
export default function Glitchtext({
  className,
}: {
  className: string;
}): JSX.Element {
  return (
    <div className={`${styles.textContainer} ${className}`}>
      <span aria-hidden="true">Code Character</span>
      Code Character
      <span aria-hidden="true">Code Character</span>
    </div>
  );
}
