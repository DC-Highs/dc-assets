
import { IslandType } from "@dchighs/dc-core"

import { StaticFileDownloader } from "./static-file-downloader"

export type IslandPackageDownloaderOptions = {
    islandType?: string
    fileName?: string
    path?: string
}

export class IslandPackageDownloader extends StaticFileDownloader {
    readonly url: string

    constructor({
        fileName,
        path,
        islandType
    }: IslandPackageDownloaderOptions) {
        super()

        if (!path && !islandType && !fileName) {
            throw new Error("Either path, islandType or fileName must be provided.")
        }

        if (path) {
            const items = path.split("/")
            islandType = items[3]
            fileName = items[4]   
        }
        
        if (islandType === IslandType.GridIslands && !fileName!.endsWith("_optim.zip")) {
            fileName = fileName!.replace(".zip", "_optim.zip")
        }

        this.url = `https://www.socialpointgames.com/static/dragoncity/mobile/ui/${islandType === IslandType.HeroicRaces ? "heroicraces_islands" : islandType}/HD/dxt5/${fileName}`
    }

    async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
}