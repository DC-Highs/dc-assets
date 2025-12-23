import { StaticFileUrlPlatformPrefix } from "@dchighs/dc-core"

import { StaticFileDownloader } from "./static-file-downloader"

export type DragonFlashAnimationDownloaderOptions = {
    imageName: string
    phase: number
    skin?: string
    platformPrefix?: string
}

export class DragonFlashAnimationDownloader extends StaticFileDownloader {
    readonly imageName: string
    readonly phase: number
    readonly skin?: string
    readonly platformPrefix?: string
    readonly url: string

    constructor({
        imageName,
        phase,
        skin,
        platformPrefix,
    }: DragonFlashAnimationDownloaderOptions) {
        super()
        
        this.imageName = imageName
        this.phase = phase
        this.skin = skin
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefix.Default
        const adjustedSkin = this.skin ?? ""
        this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/assets/sprites/${this.imageName}${adjustedSkin}_${this.phase}.swf`
    }

    async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
} 