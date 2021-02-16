const redBlackBorderImage = {
    type: 'image',
    url:  './red-black-border.jpg'
}

// select the tileSource of your choice here
let currentTileSource = redBlackBorderImage

const viewer = window.OpenSeadragon({
    id: 'openseadragon',
    prefixUrl:
        '../node_modules/openseadragon/build/openseadragon/images/',
    tileSources: [
        {
            tileSource: currentTileSource,
        },
    ],
    gestureSettingsMouse: {
        flickEnabled: true,
    },
    animationTime: 0,
    springStiffness: 100,
    autoHideControls: false,
    viewportMargins: {right: 2, bottom: 2},
})


