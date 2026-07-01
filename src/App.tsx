import { PdfAnnotator } from 'inklayer-react'
import 'inklayer-react/style'

export default function App() {
  return (
    <PdfAnnotator
      url="https://inklayer.dev/inklayer-demo.pdf"
      locale='en-US'
      defaultShowAnnotationsSidebar={true}
      user={{
        id: 'demo',
        name: 'Demo User',
      }}
      layoutStyle={{
        width: '100vw',
        height: '100vh',
      }}
      onSave={(annotations) => {
        console.log(annotations)
      }}
    />
  )
}
