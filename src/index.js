/**
 * Fragile magic. Do not touch.
 *
 * Just kidding, this file is autogenerated and changes will be overwritten on
 * the next build. To make changes, edit [library/build.js].
 */

import SlotRenderer from './utils/SlotRenderer/SlotRenderer'

import Button from './elements/Button/Button'
import ChoiceField from './elements/ChoiceField/ChoiceField'
import GitHubCorner from './elements/GitHubCorner/GitHubCorner'
import Heading from './elements/Heading/Heading'
import ImageView from './elements/ImageView/ImageView'
import InputField from './elements/InputField/InputField'
import LicenseIconography from './elements/LicenseIconography/LicenseIconography'
import Paragraph from './elements/Paragraph/Paragraph'
import ProgressBar from './elements/ProgressBar/ProgressBar'
import Rating from './elements/Rating/Rating'
import SelectField from './elements/SelectField/SelectField'
import Shield from './elements/Shield/Shield'
import Statistic from './elements/Statistic/Statistic'
import SwitchField from './elements/SwitchField/SwitchField'

import Container from './layouts/Container/Container'
import Grid from './layouts/Grid/Grid'
import GridCell from './layouts/Grid/GridCell'
import Section from './layouts/Section/Section'
import Tabbed from './layouts/Tabbed/Tabbed'
import TabbedPane from './layouts/Tabbed/TabbedPane'
import Table from './layouts/Table/Table'
import TableCell from './layouts/Table/TableCell'

import BrandImagery from './patterns/BrandImagery/BrandImagery'
import Card from './patterns/Card/Card'
import Definition from './patterns/Definition/Definition'
import Footer from './patterns/Footer/Footer'
import Header from './patterns/Header/Header'
import LicenseBadge from './patterns/LicenseBadge/LicenseBadge'
import Locale from './patterns/Locale/Locale'
import Navigation from './patterns/Navigation/Navigation'
import NavigationLink from './patterns/Navigation/NavigationLink'
import Quote from './patterns/Quote/Quote'
import Trail from './patterns/Trail/Trail'
import TrailCrumb from './patterns/Trail/TrailCrumb'

import Index from './templates/Index/Index'

// Export individual components
export {
  SlotRenderer,

  Button,
  ChoiceField,
  GitHubCorner,
  Heading,
  ImageView,
  InputField,
  LicenseIconography,
  Paragraph,
  ProgressBar,
  Rating,
  SelectField,
  Shield,
  Statistic,
  SwitchField,

  Container,
  Grid,
  GridCell,
  Section,
  Tabbed,
  TabbedPane,
  Table,
  TableCell,

  BrandImagery,
  Card,
  Definition,
  Footer,
  Header,
  LicenseBadge,
  Locale,
  Navigation,
  NavigationLink,
  Quote,
  Trail,
  TrailCrumb,

  Index
}

// Export as plugin
export default {
  install: function (Vue) {
    Vue.component('SlotRenderer', SlotRenderer)

    Vue.component('Button', Button)
    Vue.component('ChoiceField', ChoiceField)
    Vue.component('GitHubCorner', GitHubCorner)
    Vue.component('Heading', Heading)
    Vue.component('ImageView', ImageView)
    Vue.component('InputField', InputField)
    Vue.component('LicenseIconography', LicenseIconography)
    Vue.component('Paragraph', Paragraph)
    Vue.component('ProgressBar', ProgressBar)
    Vue.component('Rating', Rating)
    Vue.component('SelectField', SelectField)
    Vue.component('Shield', Shield)
    Vue.component('Statistic', Statistic)
    Vue.component('SwitchField', SwitchField)

    Vue.component('Container', Container)
    Vue.component('Grid', Grid)
    Vue.component('GridCell', GridCell)
    Vue.component('Section', Section)
    Vue.component('Tabbed', Tabbed)
    Vue.component('TabbedPane', TabbedPane)
    Vue.component('Table', Table)
    Vue.component('TableCell', TableCell)

    Vue.component('BrandImagery', BrandImagery)
    Vue.component('Card', Card)
    Vue.component('Definition', Definition)
    Vue.component('Footer', Footer)
    Vue.component('Header', Header)
    Vue.component('LicenseBadge', LicenseBadge)
    Vue.component('Locale', Locale)
    Vue.component('Navigation', Navigation)
    Vue.component('NavigationLink', NavigationLink)
    Vue.component('Quote', Quote)
    Vue.component('Trail', Trail)
    Vue.component('TrailCrumb', TrailCrumb)

    Vue.component('Index', Index)
  }
}
