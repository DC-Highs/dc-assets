import { DragonFlashAnimationDownloader, DragonFlashAnimationDownloaderOptions } from "./dragon-flash-animation-downloader"
import { DragonSpineAnimationDownloader, DragonSpineAnimationDownloaderOptions } from "./dragon-spine-animation-downloader"
import { DragonSpriteDownloader, DragonSpriteDownloaderOptions } from "./dragon-sprite-downloader"
import { DragonThumbnailDownloader, DragonThumbnailDownloaderOptions } from "./dragon-thumbnail-downloader"
import { IslandPackageDownloader, IslandPackageDownloaderOptions } from "./island-package-downloader"
import { MusicDownloader, MusicDownloaderOptions } from "./music-downloader"
import { ChestSpriteDownloader, ChestSpriteDownloaderOptions } from "./chest-sprite-downloader"
import { BuildingSpriteDownloader, BuildingSpriteDownloaderOptions } from "./building-sprite-downloader"
import { BuildingThumbnailDownloader, BuildingThumbnailDownloaderOptions } from "./building-thumbnail-downloader"

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
    },
    chests: {
        sprite: (options: ChestSpriteDownloaderOptions) => new ChestSpriteDownloader(options)
    },
    buildings: {
        sprite: (options: BuildingSpriteDownloaderOptions) => new BuildingSpriteDownloader(options),
        thumbnail: (options: BuildingThumbnailDownloaderOptions) => new BuildingThumbnailDownloader(options)
    },
    habitats: {
        sprite: null
    }
}

export * from "./dragon-flash-animation-downloader"
export * from "./static-file-downloader"
export * from "./dragon-spine-animation-downloader"
export * from "./dragon-sprite-downloader"
export * from "./island-package-downloader"
export * from "./chest-sprite-downloader"
export * from "./music-downloader"
export * from "./building-sprite-downloader"
export * from "./building-thumbnail-downloader"

export default dcAssets