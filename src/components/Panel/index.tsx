import { useCallback, useState } from 'react'
import { Header } from '../Header'
import styles from './styles.module.scss'
import { closestCenter, DndContext, DragEndEvent, DragStartEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'
import { SortableItem } from '../Sortable'

export function Panel() {
    const [items, setItems] = useState(Array.from({ length: 200 }, (_, i) => (i + 1).toString()))
    const [activeId, setActiveId] = useState<string | null>(null)
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

    const handleDragStart = useCallback((event: DragStartEvent) => {
        setActiveId(event.active.id.toString());
    }, [])
    
    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { active, over } = event;

        if(!over) {
            return
        }

        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id.toString());
                const newIndex = items.indexOf(over!.id.toString());

                return arrayMove(items, oldIndex, newIndex);
            });
        }

        setActiveId(null);
    }, [])

    const handleDragCancel = useCallback(() => {
        setActiveId(null);
    }, [])

    return (
        <div className={styles.panel}>
            <Header />
            <main>
                <h2>Notes</h2>
                <div className={styles.sticky_area}>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onDragCancel={handleDragCancel}>
                        <SortableContext items={items} strategy={rectSortingStrategy}>
                            {items.map((id) => (
                                <SortableItem key={id} id={id} />
                            ))}
                        </SortableContext>
                    </DndContext>
                </div>
            </main>
        </div>
    )
}