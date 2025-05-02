# Read & Listen Web Application

A modern, accessible web application that helps users extract text from various file formats and convert it to speech. Perfect for children, people with disabilities, and anyone who needs assistance with reading.

## 🚀 Features

### File Processing

- **Multi-format Support**
  - Images (JPEG, PNG, GIF)
  - PDF Documents
  - Word Documents (DOC, DOCX)
  - Text Files (TXT)
- **Drag & Drop Interface**
- **File Preview**
- **Progress Tracking**

### Text-to-Speech

- **Customizable Voice Settings**
  - Multiple Voice Options
  - Adjustable Speech Rate
  - Pitch Control
- **Playback Controls**
  - Play/Pause
  - Stop
  - Volume Control

### User Experience

- **Dark/Light Mode**
- **Responsive Design**
- **Accessibility Features**
- **Smooth Animations**
- **Help Documentation**

## �� Project Structure

```
src/
├── assets/                  # Static assets like images and icons
├── components/             # Reusable UI components
├── hooks/                  # Custom React hooks
├── layouts/                # Layout components
├── lib/                    # Utility libraries and helpers
├── pages/                  # Page components
├── services/               # API and service integrations
├── App.jsx                 # Main application component
├── main.jsx                # Application entry point
└── index.css               # Global styles
```

## 🛠️ Technologies Used

### Frontend

- **React** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon Library
- **Web Speech API** - Text-to-Speech

### Development Tools

- **ESLint** - Code Linting
- **Prettier** - Code Formatting
- **PostCSS** - CSS Processing
- **Autoprefixer** - CSS Compatibility

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.2.3",
    "react-icons": "^4.12.0",
    "framer-motion": "^10.16.4",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.31",
    "autoprefixer": "^10.4.16"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "prettier": "^3.2.4"
  }
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/read-and-listen.git
cd read-and-listen
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

5. **Preview production build**

```bash
npm run preview
```

## 🎯 Usage Guide

### Uploading Files

1. Click the upload area or drag and drop a file
2. Supported formats: Images, PDFs, Word documents, and text files
3. Wait for the file to be processed

### Text Extraction

1. The application automatically extracts text from your file
2. View the extracted text in the text display area
3. Edit the text if needed

### Text-to-Speech

1. Customize voice settings:
   - Select preferred voice
   - Adjust speech rate
   - Modify pitch
2. Use playback controls:
   - Play/Pause button
   - Stop button
   - Volume slider

### Theme Switching

- Click the theme toggle button to switch between dark and light modes
- Theme preference is saved automatically

## 🔧 Development

### Code Style

- Follow ESLint rules
- Use Prettier for formatting
- Maintain consistent component structure

### Adding New Features

1. Create a new branch
2. Implement your changes
3. Write tests if applicable
4. Submit a pull request

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Web Speech API for text-to-speech functionality
- React and Vite teams for the amazing frameworks
- All contributors who have helped improve this project
