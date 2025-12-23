
import { StaticFileUrlPlatformPrefix } from "@dchighs/dc-core"

import { StaticFileDownloader } from "./static-file-downloader"

export type MusicDownloaderOptions = {
    platformPrefix?: string
    keyName: string 
}

export class MusicDownloader extends StaticFileDownloader {
    readonly platformPrefix: string
    readonly keyName: string
    readonly url: string

    constructor({
        platformPrefix,
        keyName
    }: MusicDownloaderOptions) {
        super()

        this.keyName = keyName
        this.platformPrefix = platformPrefix || StaticFileUrlPlatformPrefix.Default

        this.url = `http://${this.platformPrefix}-static-s1.socialpointgames.com/static/dragoncity/mobile/sounds/music/${this.keyName}.mp3`
    }

    async download(filePath: string) {
        return await super.download(this.url, filePath)
    }
}