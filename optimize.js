
const resize = require('./resizeRules')

const fs = require('fs-extra')
const dir = require('node-dir');
const path = require('path')
const sizeOf = require('image-size');
const {
    exec,
} = require('child_process');

let count = 0;
const filesToOptimize = []

const inputFolder = './images/'
const ouputFolder = './dist/image/'
dir.files(inputFolder, (err, files) => {
    files.forEach((file) => {
        if (file.indexOf('DS_Store') > 0) {

        }
        else {
            const filePath = file;
            const sub = getSub(inputFolder, filePath).split(' ').join('').toLowerCase()
            const fileName = getFileName(file).split(' ').join('').toLowerCase()
            const fileNameNoEXT = fileName.split('.').slice(0, -1).join('.')




                const size = sizeOf(file)


                const { width, height } = resize(0.5,size)

                  filesToOptimize.push({
                      path: file,
                      fileName,
                      width,
                      height,
                      ouputFolder:ouputFolder
                  })

            count++
        }
    })
    if (filesToOptimize.length > 0) { optimize(filesToOptimize[0]) }
})
let fileOptiCount = 0

function optimize({ path, fileName, width, height, ouputFolder, HD = false }) {

    console.log(`process: ${fileOptiCount + 1}/${filesToOptimize.length}`, width, height);
    fs.ensureDir(`${ouputFolder}`, (err) => {
        exec(`convert "${path}" -resize ${width}x${height} -quality ${HD ? 90 : 85} "${ouputFolder}${fileName}"`, (err, stdout, stderr) => {
            if (err) {
                //             // node couldn't execute the command
                console.log(err);
                //
                return;
            }
            fileOptiCount++
            if (filesToOptimize[fileOptiCount]) { optimize(filesToOptimize[fileOptiCount]) }
        });
    })
}
function getSub(basePath, path) {
    const fileName = getFileName(path);
    const abosultePath = basePath.replace('./', '');

    return path
        .replace(fileName, '')
        .replace(abosultePath, '')
        .replace('./', '');
}

function getFileName(mPath) {
    const ary = mPath.split('/');

    return ary[ary.length - 1];
}
