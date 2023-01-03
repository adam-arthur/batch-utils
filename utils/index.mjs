import { execSync } from 'node:child_process'
import path from 'node:path'
import fs from 'node:fs/promises'

export {
    findFilesWithContent,
    renameFiles,
}

function findFilesWithContent({ textToMatch }) {
    const filesWithContent = execSync(`grep -rnwl "." -e "${textToMatch}"`, { encoding: 'utf-8' })
    return filesWithContent.split('\n').slice(0, -1).map(v => path.resolve(v))
}

async function renameFiles({ filePaths, getNewFileName }) {
    for (const filePath of filePaths) {
        const newFileName = getNewFileName(filePath)
        if (!newFileName) {
            console.log(`Skipped "${filePath}" due to falsy new filename`)
            continue
        }
        await fs.rename(filePath, newFileName)
        console.log(`Renamed "${filePath}" to ${newFileName}`)
    }
}