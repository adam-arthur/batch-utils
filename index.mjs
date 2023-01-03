import { findFilesWithContent } from './utils/index.mjs'

// export{}
main()

async function main() {
    console.log(
        findFilesWithContent({
            textToMatch: 'spyOn('
        })
    )
    // const filesToRename = []
    // for (const file of filesToRename) {
        
    // }
}