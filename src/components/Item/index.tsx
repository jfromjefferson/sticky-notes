import { forwardRef, HTMLAttributes, CSSProperties } from 'react';
import styles from './styles.module.scss'

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
    id: string;
    withOpacity?: boolean;
    isDragging?: boolean;
};

export const Item = forwardRef<HTMLDivElement, ItemProps>(({ id, withOpacity, isDragging, style, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
        opacity: withOpacity ? '0.5' : '1',
        cursor: isDragging ? 'grabbing' : 'grab',
        boxShadow: isDragging  ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px' : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
        transform: isDragging ? 'scale(1.05)' : 'scale(1)',
        ...style,
    }

    return <div className={styles.sticky_card} ref={ref} style={inlineStyles} {...props}>{id}</div>
})
