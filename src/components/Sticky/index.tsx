import { useDraggable } from '@dnd-kit/core'
import styles from './styles.module.scss'
import { Coordinates } from '@dnd-kit/core/dist/types';


interface ISticky {
    id: string
    coordinates: Coordinates
}

export function Sticky({ id, coordinates }: ISticky) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
    });

    const style = coordinates ? {
    transform: `translate3d(${coordinates.x}px, ${coordinates.y}px, 0)`,
    } : undefined;

    return (
        <div id={id} className={styles.sticky} ref={setNodeRef} style={style} {...listeners} {...attributes}>
            asdasd
        </div>
    )
}