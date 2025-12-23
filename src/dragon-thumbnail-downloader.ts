import { StaticFileUrlPlatformPrefix } from "@dchighs/dc-core"

import { StaticFileDownloader } from "./static-file-downloader"

export type DragonThumbnailDownloaderOptions = {
    imageName: string
    phase: number
    skin?: string
    platformPrefix?: string
}

export class DragonThumbnailDownloader extends StaticFileDownloader {
    readonly platformPrefix: string
    readonly imageName: string
    readonly phase: number
    readonly skin?: string
    readonly url: string

    constructor({
        imageName,
        phase,
        skin,
        platformPrefix
    }: DragonThumbnailDownloaderOptions) {
        super()
        
        this.imageName = imageName
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefix.Default
        this.phase = phase
        this.skin = skin
        const adjustedSkin = this.skin ?? ""
        this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/HD/thumb_${this.imageName}_${this.phase}${adjustedSkin}.png`
    }

    async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
}
