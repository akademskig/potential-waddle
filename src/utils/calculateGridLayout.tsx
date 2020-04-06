const calculateGridLayout = (windowWidth: number) => {
    const gridGap = 5
    let gridItemWidth = 230
    if (windowWidth > 1800) {
        gridItemWidth = 250
    }
    const container = windowWidth - windowWidth * 0.04
    const columns = Math.floor(container / gridItemWidth)
    const columnWidth = (container / columns / container * 100) - (columns - 1) * gridGap / columns
    return {
        columnWidth,
        gridGap,
        columns
    }
}

export default calculateGridLayout