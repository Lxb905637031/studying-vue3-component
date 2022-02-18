import Carousel from './components/Carousel'
import CarItem from './components/Carousel/Item'

import Magnifier from './components/Magnifier'

import Selector from './components/Selector'

let DreamUI = {}

DreamUI.install = function(Vue) {
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarItem.name, CarItem)
    Vue.component(Magnifier.name, Magnifier)
    Vue.component(Selector.name, Selector)
}

export default DreamUI
