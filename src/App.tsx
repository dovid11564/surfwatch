import Wind from './overview/body/Wind.tsx'
import Waves from './overview/body/Waves.tsx'
import Temp from './overview/body/Temp.tsx'
import Tide from './overview/body/Tide.tsx'
import Name from './overview/header/Name.tsx'
import Time from './overview/header/Time.tsx'
function App() {
  return (
    <div>
      App component
      header
      <Name />
      <Time />
      body
      <Wind />
      <Waves />
      <Temp />
      <Tide />
    </div>
  )
}

export default App
