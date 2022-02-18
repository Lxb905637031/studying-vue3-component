import Carousel from './components/Carousel'
import CarItem from '.components/Carousel/Item'

let DreamUI = {}

DreamUI.install = function(Vue) {
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarItem.name, CarItem)
}

export default DreamUI
