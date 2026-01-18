import { StaticFileUrlPlatformPrefix } from "@dchighs/dc-core"

import { StaticFileDownloader } from "./static-file-downloader"

export type HabitatThumbnailDownloaderOptions = {
    imageName: string
    platformPrefix?: StaticFileUrlPlatformPrefix
}

export class HabitatThumbnailDownloader extends StaticFileDownloader {
    readonly url: string
    readonly imageName: string
    readonly platformPrefix: StaticFileUrlPlatformPrefix
    
    constructor({
        imageName,
        platformPrefix
    }: HabitatThumbnailDownloaderOptions) {
        super()
        this.imageName = imageName
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefix.Default
        this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/assets/thumbs/${imageName}.jpg`
    }
    
    async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
}