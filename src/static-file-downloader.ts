import axios from "axios"
import fs from "node:fs"

export class StaticFileDownloader {
    async download(url: string, filePath: string) {
        const response = await axios.get(url, { responseType: "arraybuffer" })
        await fs.promises.writeFile(filePath, response.data)
        return filePath
    }
}