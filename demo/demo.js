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
})


const osdCanvas = document.getElementById('openseadragon')
const widthCtrl = document.getElementById('width-ctrl')
const heightCtrl = document.getElementById('height-ctrl')
const getCtrl = document.getElementById('get-ctrl')
const setCtrl = document.getElementById('set-ctrl')
const unsetCtrl = document.getElementById('unset-ctrl')

widthCtrl.addEventListener('input', function () {
    osdCanvas.style.width = widthCtrl.value + 'px'
})

heightCtrl.addEventListener('input', function () {
    osdCanvas.style.height = heightCtrl.value + 'px'
})

getCtrl.addEventListener('click', function () {
    widthCtrl.value = osdCanvas.clientWidth
    heightCtrl.value = osdCanvas.clientHeight
})

setCtrl.addEventListener('click', function () {
    osdCanvas.style.width = widthCtrl.value + 'px'
    osdCanvas.style.height = heightCtrl.value + 'px'
})

unsetCtrl.addEventListener('click', function () {
    osdCanvas.style.width = ''
    osdCanvas.style.height = ''
})
