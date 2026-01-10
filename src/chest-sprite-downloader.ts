import { ChestSpriteQuality } from "@dchighs/dc-core"

import { StaticFileDownloader } from "./static-file-downloader"

export type ChestSpriteDownloaderOptions = {
    imageQuality?: ChestSpriteQuality
    imageName: string
}

export class ChestSpriteDownloader extends StaticFileDownloader {
    readonly url: string
    readonly basicUrl: string
    readonly imageQuality: ChestSpriteQuality
    readonly imageName: string
    
    constructor({
        imageQuality,
        imageName
    }: ChestSpriteDownloaderOptions) {
        super()
        this.imageQuality = imageQuality || ChestSpriteQuality.Default
        this.imageName = imageName
        this.basicUrl = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/chests/ui_basic_${imageName}${imageQuality}.png`
        this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/chests/ui_${imageName}${imageQuality}.png`
    }
    
    async download(filePath: string): Promise<string> {
        try {
            return await super.download(this.url, filePath)
        } catch (error) {
            return await super.download(this.basicUrl, filePath)
        }
    }
}