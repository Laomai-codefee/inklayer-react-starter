# InkLayer React Starter

Official React starter template for **InkLayer** — a PDF annotation SDK built on PDF.js.

This project demonstrates how to quickly integrate InkLayer into a React application.

👉 Live Demo: https://inklayer.dev  
👉 React SDK: https://github.com/Laomai-codefee/inklayer-react  
👉 Vue SDK: https://github.com/Laomai-codefee/inklayer-vue  

---

## 🚀 Quick Start

### Install dependencies

```bash
npm install

or

pnpm install
```

### Run project

```bash
npm run dev

or

pnpm dev

```

### Open in browser
```bash
http://localhost:5173
```

## 📦 What This Starter Includes

### This starter shows the minimal integration of InkLayer in a React app:

- PDF rendering based on PDF.js
- Annotation system (highlight, selection, etc.)
- Annotation sidebar
- Save annotation output

## 🧩 Basic Usage

```typescript
import { PdfAnnotator } from 'inklayer-react'
import 'inklayer-react/style'

export default function App() {
  return (
    <PdfAnnotator
      url="https://inklayer.dev/inklayer-demo.pdf"
      user={{
        id: 'demo',
        name: 'Demo User',
      }}
      layoutStyle={{
        width: '100vw',
        height: '100vh',
      }}
      defaultShowAnnotationsSidebar
      onSave={(annotations) => {
        console.log('Saved annotations:', annotations)
      }}
    />
  )
}
```

## 📄 How It Works
- Load PDF via PDF.js
- Render annotation layer on top of PDF pages
- User creates highlights / comments
- SDK emits structured annotation data via onSave

## 📊 Output Data
`onSave` returns structured annotation data:
```typescript
[
  {
    id: "annotation-id",
    kind: "text-markup",
    target: { ... },
    payload: { ... },
    meta: { ... }
  }
]
```
### This data can be:
- Stored in database
- Re-rendered later
- Synced across systems

## 🧪 Purpose
### This starter is designed for:
- Quick SDK evaluation
- Integration testing
- Reference implementation
- Project bootstrap

## 📚 Next Steps
- Docs: https://inklayer.dev/docs
- React SDK: https://github.com/Laomai-codefee/inklayer-react
- Vue SDK: https://github.com/Laomai-codefee/inklayer-vue
- Vue Starter: https://github.com/Laomai-codefee/inklayer-vue-starter