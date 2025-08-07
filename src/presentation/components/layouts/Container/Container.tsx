import styles from '@presentation/styles/Container.module.css';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Container({ children, ...props }: ContainerProps) {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
}