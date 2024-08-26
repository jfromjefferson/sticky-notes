import { v4 } from 'uuid'
import { Header } from '../Header'
import { Sticky } from '../Sticky'
import styles from './styles.module.scss'
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core'
import { useState } from 'react'
import { Coordinates, DragMoveEvent } from '@dnd-kit/core/dist/types'

export function Panel() {
    const list = [v4(),v4(),v4(),v4()]
    const [transform, setTransform] = useState<Coordinates>({
        x: 0,
        y: 0
    })

    function handleDragStart(event: DragStartEvent) {}

    function handleDragMove(event: DragMoveEvent) {
        setTransform(event.delta)
    }
    
    function handleDragEnd(event: DragEndEvent) {
        setTransform(event.delta)
        
    }

    console.log(transform)

    return (
        <div className={styles.panel}>
            <Header />
            <main>
                <h2>Notes</h2>
                <div className={styles.sticky_area}>
                    <DndContext  onDragStart={handleDragStart} onDragMove={(event) => handleDragMove(event)} onDragEnd={handleDragEnd}>
                        {
                            list.map(item => (
                                <Sticky key={item} id={item} coordinates={transform} />
                            ))
                        }
                    </DndContext>
                </div>
            </main>
        </div>
    )
}