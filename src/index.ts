import { DragonFlashAnimationDownloader, DragonFlashAnimationDownloaderOptions } from "./dragon-flash-animation-downloader"
import { DragonSpineAnimationDownloader, DragonSpineAnimationDownloaderOptions } from "./dragon-spine-animation-downloader"
import { DragonSpriteDownloader, DragonSpriteDownloaderOptions } from "./dragon-sprite-downloader"
import { DragonThumbnailDownloader, DragonThumbnailDownloaderOptions } from "./dragon-thumbnail-downloader"
import { IslandPackageDownloader, IslandPackageDownloaderOptions } from "./island-package-downloader"
import { MusicDownloader, MusicDownloaderOptions } from "./music-downloader"

const dcAssets = {
    dragons: {
        animations: {
            flash: (options: DragonFlashAnimationDownloaderOptions) => new DragonFlashAnimationDownloader(options),
            spine: (options: DragonSpineAnimationDownloaderOptions) => new DragonSpineAnimationDownloader(options)
        },
        sprite: (options: DragonSpriteDownloaderOptions) => new DragonSpriteDownloader(options),
        thumbnail: (options: DragonThumbnailDownloaderOptions) => new DragonThumbnailDownloader(options),
    },
    islands: {
        package: (options: IslandPackageDownloaderOptions) => new IslandPackageDownloader(options)
    },
    sounds: {
        music: (options: MusicDownloaderOptions) => new MusicDownloader(options)
    }
}

export * from "./dragon-flash-animation-downloader"
export * from "./static-file-downloader"
export * from "./dragon-spine-animation-downloader"
export * from "./dragon-sprite-downloader"
export * from "./island-package-downloader"
export * from "./music-downloader"

export default dcAssets