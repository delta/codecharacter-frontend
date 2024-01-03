import styles from './GraphFooter.module.css';
const GraphFooter = ({ graph, selected, setSelected }: GraphFooterProps) => {
  return (
    <>
      <div className={styles.footer}>
        {[...graph].map((g, i) => {
          return (
            <>
              <div
                key={g}
                className={`${styles.button} ${
                  selected == i ? styles.buttonSelected : ''
                }`}
                onClick={() => {
                  setSelected(i);
                }}
              >
                {g}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default GraphFooter;
