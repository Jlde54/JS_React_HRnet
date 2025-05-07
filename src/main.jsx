import 'react-datalist-jld/react-datalist-jld.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { store } from './redux/store'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </StrictMode>
)
