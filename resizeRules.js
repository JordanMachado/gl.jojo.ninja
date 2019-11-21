module.exports = function resize(percent, size) {
    let finalWidth = nearestPowerOf2(size.width * percent);
    let finalHeight = nearestPowerOf2(size.height * percent)

    if (finalWidth > 512 || finalHeight > 512) {
        // console.log('yop', finalWidth, finalHeight);
        const max = Math.max(finalWidth, finalHeight)

        const divisor = max / 512

        finalWidth = finalWidth / divisor
        finalHeight = finalHeight / divisor
    }
    if (finalWidth <= 64 || finalHeight <= 64) {
        finalWidth = finalWidth * 2
        finalHeight = finalHeight * 2
    }

    return { width: finalWidth, height: finalHeight }
}

function nearestPowerOf2(n) {
    return 1 << 31 - Math.clz32(n);
}
