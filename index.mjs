import { findFilesWithContent, renameFiles } from './utils/index.mjs'

// export{}
main()

async function main() {
    const filePaths = findFilesWithContent({
            textToMatch: 'spyOn('
        })

    renameFiles({
        filePaths,
        getNewFileName(filename) {
            console.log(filename)
            if (!filename.includes('.spec.')) {
                return
            }

            return filename.replace('.spec.', '.disabledspec.')
        }
    })
}