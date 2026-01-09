import { BuildingSpriteQuality, StaticFileUrlPlatformPrefix } from "@dchighs/dc-core"
import { StaticFileDownloader } from "./static-file-downloader"

export type BuildingSpriteDownloaderOptions = {
    imageName: string
    platformPrefix?: StaticFileUrlPlatformPrefix
    imageQuality?: BuildingSpriteQuality
}

export class BuildingSpriteDownloader extends StaticFileDownloader {
    readonly url: string
    readonly imageName: string
    readonly imageQuality: BuildingSpriteQuality
    readonly platformPrefix: StaticFileUrlPlatformPrefix
    
    constructor({
        imageName,
        platformPrefix,
        imageQuality
    }: BuildingSpriteDownloaderOptions) {
        super()
        this.imageName = imageName
        this.imageQuality = imageQuality || BuildingSpriteQuality.Default
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefix.Default
        this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/buildings/ui_${imageName}${this.imageQuality}.png`
    }
    
    async download(filePath: string): Promise<string> {
        return await super.download(this.url, filePath)
    }
}               