# Booksy Clone - React Native App

A beautiful appointment booking app built with React Native, Expo, and NativeWind, inspired by Booksy.

## Features

✨ **Modern UI/UX**
- Clean, intuitive design with NativeWind (Tailwind CSS for React Native)
- Smooth animations and transitions
- Professional color scheme and typography

🔐 **Authentication Flow**
- Onboarding screen with app introduction
- Login and signup forms with validation
- Social login options (UI ready)

🏠 **Home Screen**
- Service categories with icons
- Search functionality
- Featured businesses nearby
- Quick actions (My Bookings, Favorites)
- Promotional banners

🔍 **Explore & Search**
- Business listings with filters
- Category filtering (Hair & Beauty, Massage, Nails, etc.)
- Search by business name or service
- Rating and distance display
- Map toggle button

🏢 **Business Details**
- Comprehensive business information
- Service listings with prices
- Customer reviews and ratings
- Contact information and hours
- Tabbed interface (Services, Reviews, Info)

📅 **Booking Flow**
- Date and time slot selection
- Service details and pricing
- Booking confirmation
- Real-time availability

📱 **User Profile**
- Personal information management
- Booking history (upcoming and past)
- Settings and preferences
- App version info

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and tools
- **Expo Router** - File-based routing system
- **NativeWind** - Tailwind CSS for React Native
- **TypeScript** - Type safety and better development experience
- **Expo Vector Icons** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd booksy-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   
   # For Web
   npm run web
   ```

## App Structure

```
app/
├── (auth)/                 # Authentication screens
│   ├── _layout.tsx
│   ├── onboarding.tsx
│   ├── login.tsx
│   └── signup.tsx
├── (tabs)/                 # Main app tabs
│   ├── _layout.tsx
│   ├── index.tsx          # Home screen
│   ├── explore.tsx        # Business search
│   ├── bookings.tsx       # User bookings
│   └── profile.tsx        # User profile
├── business/
│   └── [id].tsx           # Business detail screen
├── booking/
│   └── [businessId].tsx   # Booking flow
├── _layout.tsx            # Root layout
└── index.tsx              # Entry point

components/
├── ui/                    # Reusable UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── SearchBar.tsx
│   └── index.ts
└── ...

lib/
└── utils.ts               # Utility functions
```

## Key Features Implemented

### 🎨 UI Components
- **Button**: Multiple variants (primary, secondary, outline, ghost) with loading states
- **Input**: Form inputs with validation and error handling
- **Card**: Flexible card component with press handlers
- **SearchBar**: Search input with filter button

### 📱 Screens
1. **Onboarding**: App introduction with features highlight
2. **Authentication**: Login/signup with form validation
3. **Home**: Dashboard with categories, search, and nearby businesses
4. **Explore**: Full business listing with search and filters
5. **Business Detail**: Complete business information with booking options
6. **Booking Flow**: Date/time selection with confirmation
7. **Bookings**: User's appointment history
8. **Profile**: User settings and account management

### 🎯 User Experience
- Smooth navigation between screens
- Form validation with error messages
- Loading states for better feedback
- Empty states with helpful messages
- Consistent design language throughout

## Development Notes

- **NativeWind**: Configured with custom color palette and extended theme
- **File-based Routing**: Using Expo Router for navigation
- **TypeScript**: Full type safety with interfaces for data structures
- **Responsive Design**: Optimized for various screen sizes

## Future Enhancements

- [ ] Real backend integration
- [ ] Push notifications
- [ ] Map integration for business locations
- [ ] Payment processing
- [ ] Real-time chat with businesses
- [ ] Photo uploads and gallery
- [ ] Social features (reviews, sharing)
- [ ] Multi-language support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Booksy's excellent user experience
- Built with modern React Native best practices
- Uses Expo's powerful development tools
