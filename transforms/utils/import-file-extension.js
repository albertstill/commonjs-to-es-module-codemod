module.exports = function handleSourcePath(sourcePath) {
    if (sourcePath.value.startsWith('.')) {
        sourcePath.value = `${sourcePath.value}.js`
    }
}