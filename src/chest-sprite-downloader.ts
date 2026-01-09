import { DragonSpriteQuality } from "@dchighs/dc-core"

import { StaticFileDownloader } from "./static-file-downloader"

export type ChestSpriteDownloaderOptions = {
    imageQuality: DragonSpriteQuality
    imageName: string
}

export class ChestSpriteDownloader extends StaticFileDownloader {
    readonly url: string
    readonly imageQuality: DragonSpriteQuality
    readonly imageName: string
    
    constructor({
        imageQuality,
        imageName
    }: ChestSpriteDownloaderOptions) {
        super()
        this.imageQuality = imageQuality
        this.imageName = imageName
        this.url = `https://dci-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/chests/ui_basic_${imageName}${imageQuality}.png`
    }
    
    async download(filePath: string): Promise<string> {
        return await super.download(this.url, filePath)
    }
}