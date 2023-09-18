import { ThemeSettings } from './components/theme-settings';
import Router from './routes';
import ThemeProvider from './themes';

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        <Router />
      </ThemeSettings>
    </ThemeProvider>
  )
}

export default App;
