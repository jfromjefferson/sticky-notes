import { useDraggable } from '@dnd-kit/core'
import styles from './styles.module.scss'
import { Coordinates } from '@dnd-kit/core/dist/types';


interface ISticky {
    id: string
}

export function Sticky({ id }: ISticky) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
    });

    const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div id={id} className={styles.sticky} ref={setNodeRef} style={style} {...listeners} {...attributes}>
            asdasd
        </div>
    )
}