import { useRef, useState, useCallback } from 'react';

export default function useDraggableScroll() {
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef(null);

    const handleMouseDown = useCallback((e) => {
        setIsDragging(true);
        setStartPosition({
            x: e.pageX - (containerRef.current?.offsetLeft || 0),
            y: e.pageY - (containerRef.current?.offsetTop || 0),
        });
        setScrollLeft(containerRef.current?.scrollLeft || 0);
    }, []);

    const handleMouseMove = useCallback(
        (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const x = e.pageX - (containerRef.current?.offsetLeft || 0);
            const walk = (x - startPosition.x) * 2;
            if (containerRef.current) {
                containerRef.current.scrollLeft = scrollLeft - walk;
            }
        },
        [isDragging, startPosition, scrollLeft]
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    return {
        containerRef,
        handlers: {
            onMouseDown: handleMouseDown,
            onMouseMove: handleMouseMove,
            onMouseUp: handleMouseUp,
            onMouseLeave: handleMouseLeave,
        },
        isDragging,
    };
}
