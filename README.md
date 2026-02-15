# 📚 Personal Library Tracker

A modern React application for searching and managing your personal book wish list using the Google Books API.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue)

---

## ✨ Features

### Core Features
- 🔍 **Book Search** - Search for books by title or author using Google Books API
- 📖 **Book Display** - View book covers, titles, and authors
- ➕ **Add to Wish List** - Save books to your personal wish list
- 🗑️ **Remove from Wish List** - Manage your saved books
- 💾 **Persistent Storage** - Wish list saves automatically using localStorage
- 🧭 **Navigation** - Easy switching between Search and Wish List pages

### Bonus Features
- ⏱️ **Debounced Search** - Auto-search as you type (500ms delay)
- 🔄 **Loading Spinner** - Visual feedback during API calls
- ⚠️ **Error Handling** - Clear error messages and empty states
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean interface with smooth animations
- ✓ **Smart Button States** - Visual feedback for added books

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone or download this repository**

2. **Navigate to the project directory:**
```bash
   cd library-starter
```

3. **Install dependencies:**
```bash
   npm install
```

4. **Start the development server:**
```bash
   npm start
```

5. **Open your browser:**
   - The app will automatically open at [http://localhost:3000](http://localhost:3000)
   - If it doesn't, navigate to the URL manually

---

## 📁 Project Structure
```
library-starter/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   └── Navigation.js    # Navigation bar component
│   ├── context/
│   │   └── LibraryContext.js # Global state management
│   ├── pages/
│   │   ├── SearchPage.js    # Book search page
│   │   └── WishListPage.js  # Wish list display page
│   ├── App.js               # Main app component
│   ├── App.css              # Global styles
│   ├── index.js             # Entry point
│   └── index.css            # Base styles
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

---

## 🛠️ Technologies Used

- **React 18** - UI library with Hooks
- **Context API** - Global state management
- **localStorage** - Client-side data persistence
- **Google Books API** - Book data source
- **CSS3** - Styling with Flexbox and animations
- **ES6+** - Modern JavaScript features

---

## 🎯 How It Works

### Search Flow
1. User types in the search box
2. After 500ms of inactivity (debouncing), API call is triggered
3. Google Books API returns matching books
4. Results are displayed with cover images and details
5. User can add books to wish list with one click

### State Management
- **Context API** provides global state accessible to all components
- **useState** manages local component state
- **useEffect** handles side effects (API calls, localStorage)

### Data Persistence
- Wish list automatically saves to browser's localStorage
- Data persists after page refresh or browser restart
- Uses JSON serialization for storage

---

## 📖 Usage Guide

### Searching for Books
1. Click on the "Search Books" tab
2. Start typing a book title or author name
3. Results appear automatically as you type
4. Click "Add to Wish List" to save a book

### Managing Your Wish List
1. Click on the "My Wish List" tab
2. View all your saved books
3. Click "Remove from Wish List" to delete a book
4. Your list is saved automatically

### Tips
- Use the **X button** to quickly clear your search
- Books already in your wish list show a **green checkmark**
- The wish list shows a **badge** with the total count
- All data is **stored locally** - no account needed!

---

## 🎨 Key Features Explained

### Debouncing
Instead of making an API call on every keystroke, the app waits 500ms after the user stops typing. This:
- Reduces unnecessary API calls
- Improves performance
- Provides better user experience

### Error Handling
The app gracefully handles various scenarios:
- Network errors
- No results found
- Empty search terms
- Missing book covers

### Responsive Design
The layout adapts to different screen sizes:
- **Desktop**: Multi-column grid layout
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Single-column stacked layout

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Search returns relevant results
- [ ] Adding book to wish list works
- [ ] Removing book from wish list works
- [ ] Wish list persists after refresh
- [ ] Debouncing delays search appropriately
- [ ] Loading spinner appears during search
- [ ] Error messages display correctly
- [ ] Empty states show proper messages
- [ ] Responsive on mobile devices

---

## 🚧 Future Enhancements

Potential features for future development:
- [ ] Book details modal with description
- [ ] Reading status (Want to Read, Reading, Read)
- [ ] Star ratings
- [ ] Notes/reviews for books
- [ ] Categories/tags
- [ ] Export wish list
- [ ] Dark mode
- [ ] Multiple wish lists

---

## 📝 Available Scripts

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build`
Builds the app for production to the `build` folder.  
Optimizes the build for best performance.

### `npm test`
Launches the test runner in interactive watch mode.

---

## 🐛 Known Issues

None at the moment! 🎉

If you encounter any bugs, please report them.

---

## 📚 API Reference

### Google Books API
- **Endpoint**: `https://www.googleapis.com/books/v1/volumes`
- **Parameters**: 
  - `q`: Search query (required)
  - `maxResults`: Number of results (default: 20)
- **Documentation**: [Google Books API Docs](https://developers.google.com/books/docs/v1/using)

---

## 🤝 Contributing

This is a personal project, but suggestions are welcome!

---

## 📄 License

This project is created for educational purposes.

---

## 👨‍💻 Author

Created as a technical assessment project.

---

## 🙏 Acknowledgments

- Google Books API for book data
- React documentation and community
- All the books that inspire us to read! 📚

---

## 📞 Support

If you have any questions or run into issues:
1. Check this README
2. Review the code comments
3. Check browser console for errors

---

**Happy Reading! 📖✨**