import Carousel from './components/Carousel'
import CarItem from './components/Carousel/Item'

import Magnifier from './components/Magnifier'

import Selector from './components/Selector'

import Star from './components/Star'

let DreamUI = {}

DreamUI.install = function(Vue) {
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarItem.name, CarItem)
    Vue.component(Magnifier.name, Magnifier)
    Vue.component(Selector.name, Selector)
    Vue.component(Star.name, Star)
}

export default DreamUI
