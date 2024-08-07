import styles from './Expandable.module.scss';
import { ComponentChildren } from 'preact';

export function Expandable(props: { children: ComponentChildren }) {
  return (
    <div class={styles.expandable}>
      <div class={styles.expandable__content}>{props.children}</div>
    </div>
  );
}
