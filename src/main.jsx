import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GameProvider } from './contexts/GameContext'
import { InfinitiveProvider } from './contexts/InfinitiveContext.jsx'
import { IsAnsweredProvider } from './contexts/IsAnsweredContext.jsx'
import { TenseContextProvider } from './contexts/TenseContext.jsx'
import { SubjectProvider } from './contexts/SubjectContext.jsx'
import { IsCorrectProvider } from './contexts/IsCorrectContext.jsx'
import { TimerProvider } from './contexts/TimerContext.jsx'
import { ScoreContextProvider } from './contexts/ScoreContext.jsx'
import 'react-tooltip/dist/react-tooltip.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <GameProvider>
        <InfinitiveProvider>
          <TimerProvider>
            <IsAnsweredProvider>
              <TenseContextProvider>
                <SubjectProvider>
                  <IsCorrectProvider>
                    <ScoreContextProvider>
                      <App />
                    </ScoreContextProvider>
                  </IsCorrectProvider>
                </SubjectProvider>
              </TenseContextProvider>
            </IsAnsweredProvider>
          </TimerProvider>
        </InfinitiveProvider>
      </GameProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
