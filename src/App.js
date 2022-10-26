import MenuBar from './MenuBar'
import ChartDisplay from './ChartDisplay';
import ChartEditor from './ChartEditor'
import ChartContextProvider from './context'

function App() {
    return (
    <ChartContextProvider>
        <MenuBar />
        <ChartDisplay />
        <ChartEditor />
    </ChartContextProvider>
  );
}

export default App;
