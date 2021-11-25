export const isInViewport = (element: HTMLDivElement): boolean => {
    const rect = element.getBoundingClientRect();
    return (
        window.innerHeight / 2 > rect.top &&
        window.innerHeight / 2 <= (rect.top + rect.height)
    )
}