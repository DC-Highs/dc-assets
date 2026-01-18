import { HabitatSpriteQuality, StaticFileUrlPlatformPrefix } from "@dchighs/dc-core"
import { StaticFileDownloader } from "./static-file-downloader"

export type HabitatSpriteDownloaderOptions = {
    imageName: string
    platformPrefix?: StaticFileUrlPlatformPrefix
    imageQuality?: HabitatSpriteQuality
}

export class HabitatSpriteDownloader extends StaticFileDownloader {
    readonly url: string
    readonly imageName: string
    readonly imageQuality: HabitatSpriteQuality
    readonly platformPrefix: StaticFileUrlPlatformPrefix
    
    constructor({
        imageName,
        platformPrefix,
        imageQuality
    }: HabitatSpriteDownloaderOptions) {
        super()

        this.imageName = imageName
        this.imageQuality = imageQuality || HabitatSpriteQuality.Default
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefix.Default
        this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/habitats/ui_${imageName}${this.imageQuality}.png`
    }
    
    async download(filePath: string): Promise<string> {
        return await super.download(this.url, filePath)
    }
}               