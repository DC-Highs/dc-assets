# @dchighs/dc-assets

**@dchighs/dc-assets** is a package for downloading assets from the game [Dragon City](https://dragoncitygame.com/) (this is not an official SocialPoint library; it is fan-made).

## 📦 Installation

Installation is straightforward—simply use your preferred package manager. Here is an example using NPM:

```bush
npm i @dchighs/dc-assets @dchighs/dc-core
```

> You need to install `@dchighs/dc-core` as well because I have set it as a `peerDependency`. This means the package requires `@dchighs/dc-core` to function, but it will use the specific version you have installed in your project.

---

## 🚀 Usage

<a href="https://www.buymeacoffee.com/marcuth">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="200">
</a>

### Downloading Dragon Assets

#### Downloading Animations

**Flash Animations (`.swf`):**

To obtain the URL and download the Flash animation file (`.swf`), you will need to provide the following information:

```ts
import { DragonPhase } from "@dchighs/dc-core"
import dcAssets from "@dchighs/dc-assets"

;(async () => {
	const dragonFlashAnimationDownloader = dcAssets.dragons.animations.flash({
		imageName: "1000_dragon_nature",
		phase: DragonPhase.Adult,
		// skin: "_1"
	})
	
	await dragonFlashAnimationDownloader.download("dragon-animation.swf")
})();
```

**Spine Animations (`.zip`):**

```ts
import { DragonPhase } from "@dchighs/dc-core"
import dcAssets from "@dchighs/dc-assets"

;(async () => {
	const dragonSpineAnimationDownloader = dcAssets.dragons.animations.spine({
		imageName: "1000_dragon_nature",
		phase: DragonPhase.Adult,
		// skin: "_1"
	})
	
	await dragonSpineAnimationDownloader.download("dragon-animation.zip")
})();
```

---

### Downloading Dragon Sprites

```ts
import { DragonPhase, DragonSpriteQuality } from "@dchighs/dc-core"
import dcAssets from "@dchighs/dc-assets"

;(async () => {
	const dragonSpriteDownloader = dcAssets.dragons.sprite({
		imageName: "1000_dragon_nature",
		phase: DragonPhase.Adult,
		imageQuality: DragonSpriteQuality.Large
		// skin: "_1"
	})
	
	await dragonSpriteDownloader.download("dragon-sprite.png")
})();
```

---

### Downloading Dragon Thumbnails

```ts
import { DragonPhase } from "@dchighs/dc-core"
import dcAssets from "@dchighs/dc-assets"

;(async () => {
	const dragonThumbDownloader = dcAssets.dragons.thumbnail({
		imageName: "1000_dragon_nature",
		phase: DragonPhase.Adult,
		// skin: "_1"
	})
	
	await dragonThumbDownloader.download("dragon-thumbnail.png")
})();
```

---

### Downloading Island Content Packages

```ts
import dcAssets from "@dchighs/dc-assets"

;(async () => {
	const islandDownloader = dcAssets.islands.package({
		fileName: "1000_dragon_nature",
		islandType: "heroicraces_islands",
	})
	
	await islandDownloader.download("island-package.zip")
})();
```

### Downloading Audio

**Music:**

```ts
import dcAssets from "@dchighs/dc-assets"

;(async () => {
	const musicDownloader = dcAssets.sounds.music({
		keyName: "531_dc_party_planning_island"
	})
	
	await musicDownloader.download("music.mp3")
})();
```

---

### Downloading Chest Sprites

```ts
import dcAssets from "@dchighs/dc-assets"

;(async () => {
	const chestDownloader = dcAssets.chests.sprite({
		fileName: "1000_dragon_nature",
		islandType: "heroicraces_islands",
	})
	
	await chestDownloader.download("chest-sprite.png")
})();
```

---

### Downloading Building Sprites

```ts
import { BuildingSpriteQuality } from "@dchighs/dc-core"
import dcAssets from "@dchighs/dc-assets"

;(async () => {
	const buildingSpriteDownloader = dcAssets.buildings.sprite({
		imageName: "10552_hatchery6reskinart_building",
		imageQuality: BuildingSpriteQuality.Normal,
	})
	
	await buildingSpriteDownloader.download("building-sprite.png")
})();
```

---

### Downloading Building Thumbnails

```ts
import dcAssets from "@dchighs/dc-assets"

;(async () => {
	const buildingThumbnailDownloader = dcAssets.buildings.thumbnail({
		imageName: "10552_hatchery6reskinart_building",
	})
	
	await buildingThumbnailDownloader.download("building-thumbnail.jpg")
})();
```

---

## 🤝 Contributing

* Want to contribute? Follow these steps:
* Fork the repository.
* Create a new branch (`git checkout -b feature-new`).
* Commit your changes (`git commit -m 'Add new feature'`).
* Push to the branch (`git push origin feature-new`).
* Open a Pull Request.

---

## 📝 License

This project is licensed under the MIT License.

Would you like me to proofread the technical terms or adjust the tone for a specific audience?