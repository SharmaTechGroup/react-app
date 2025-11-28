import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import App from './App.jsx'
import Login from './components/login/login.jsx'
import Register from './components/register/register.jsx'
import { NetflixIndex } from './netflix/netflix-index.jsx'
import { DataBinding } from './components/data-binding/data-binding.jsx'
import { Fakestore } from './components/fakestore/fakestore.jsx'
import { EventBinding } from './components/event-binding/event-binding.jsx'
import { EMICalculator } from './components/emi-calculator/emi-calculator.jsx'
import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx'
import { MouseMove } from './components/mouse-move/mouse-move.jsx'
import { KeyDemo } from './components/key-demo/key-demo.jsx'
import { DebounceDemo } from './components/debounce-demo/debounce-demo.jsx'
import { CarouselDemo } from './components/carousel-demo/carousel-demo.jsx'
import { ConditionDemo } from './components/condition-demo/condition-demo.jsx'
import { ComponentDemo } from './components/component-demo/component-demo.jsx'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { ContextDemo } from './components/context-demo/context-demo.jsx'
import { WeatherSearch } from './components/weather-app/weather-search.jsx'
import { ShoppingIndex } from './shopping/shopping-index.jsx'
import { FormDemo } from './components/form-demo/form-demo.jsx'
import { HookFormDemo } from './components/hook-form-demo/hook-form-demo.jsx'

createRoot(document.getElementById('root')).render(
  
    <HookFormDemo />
  
)
