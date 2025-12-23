import { DragonSpriteQuality, StaticFileUrlPlatformPrefix } from "@dchighs/dc-core"

import { StaticFileDownloader } from "./static-file-downloader"

export type DragonSpriteDownloaderOptions = {
    imageQuality?: string
    imageName: string
    phase: number
    skin?: string
    platformPrefix?: string
}

export class DragonSpriteDownloader extends StaticFileDownloader {
    readonly platformPrefix: string
    readonly imageQuality: string
    readonly imageName: string
    readonly phase: number
    readonly skin?: string
    readonly url: string

    constructor({
        imageQuality,
        imageName,
        phase,
        skin,
        platformPrefix,
    }: DragonSpriteDownloaderOptions) {
        super()
        
        this.imageName = imageName
        this.imageQuality = imageQuality ?? DragonSpriteQuality.Default
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefix.Default
        this.phase = phase
        this.skin = skin
        const adjustedSkin = this.skin ?? ""
        this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/ui/dragons/ui_${this.imageName}${adjustedSkin}_${this.phase}${this.imageQuality}.png`
    }

    async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
}