import { StaticFileUrlPlatformPrefix, TextureCompressionFormat } from "@dchighs/dc-core"

import { StaticFileDownloader } from "./static-file-downloader"

export type DragonSpineAnimationDownloaderOptions = {
    imageName: string
    phase: number
    skin?: string
    textureCompressionFormat?: string
    platformPrefix?: string
    useNewUrlFormat?: boolean
}

export class DragonSpineAnimationDownloader extends StaticFileDownloader {
    readonly imageName: string
    readonly phase: number
    readonly skin?: string
    readonly textureCompressionFormat: string
    readonly platformPrefix: string
    readonly useNewUrlFormat: boolean
    readonly url: string

    constructor({
        imageName,
        phase,
        skin,
        textureCompressionFormat,
        platformPrefix,
        useNewUrlFormat
    }: DragonSpineAnimationDownloaderOptions) {
        super()

        this.imageName = imageName
        this.phase = phase
        this.skin = skin
        this.textureCompressionFormat = textureCompressionFormat || TextureCompressionFormat.Default
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefix.Default
        this.useNewUrlFormat = useNewUrlFormat ?? true
        const adjustedSkin = this.skin ?? ""

        if (this.useNewUrlFormat) {
            this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/engine/version_1_1/dragons/${this.imageName}${adjustedSkin}_${this.phase}/${this.imageName}${adjustedSkin}_${this.phase}_HD_tweened_${this.textureCompressionFormat}.zip`
        } else {
            this.url = `https://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/engine/version_1_1/dragons/${this.imageName}${adjustedSkin}_${this.phase}/basic_${this.imageName}${skin}_${phase}_HD_spine-3-8-59_${this.textureCompressionFormat}.zip`
        }
    }

    async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
}
