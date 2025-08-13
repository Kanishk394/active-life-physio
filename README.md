# Active Life Physiotherapy Clinic Website

A modern, responsive website for Active Life Physiotherapy Clinic built with Bootstrap, HTML, CSS, and JavaScript, featuring a Supabase backend for appointment management and testimonials.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Online Appointment Booking** - Integrated with Supabase database
- **Dynamic Testimonials** - Users can submit testimonials that display after approval
- **WhatsApp Integration** - Automatic notifications for new appointments
- **Admin Dashboard** - Manage appointments and testimonials
- **Modern UI/UX** - Clean, professional design with smooth animations

## 🚀 Live Demo

Visit the live website: [Active Life Physiotherapy Clinic](https://your-domain.com)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Bootstrap 5, JavaScript
- **Backend**: Supabase (PostgreSQL database)
- **Hosting**: Netlify/Vercel (recommended)
- **Icons**: Font Awesome
- **Notifications**: WhatsApp API integration

## 📁 Project Structure

```
active-life-physio/
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── supabase-config.js
├── images/
│   ├── clinic/
│   └── [various images]
├── pages/
│   ├── about.html
│   ├── appointment.html
│   ├── testimonials.html
│   ├── services.html
│   ├── contact.html
│   ├── admin.html
│   └── [other pages]
├── backend/
│   ├── supabase-schema.sql
│   ├── testimonials-schema.sql
│   └── SETUP_INSTRUCTIONS.md
├── index.html
└── README.md
```

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/active-life-physio.git
cd active-life-physio
```

### 2. Set up Supabase Backend
1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Run the SQL scripts from `backend/` folder in Supabase SQL Editor
4. Update `js/supabase-config.js` with your API keys

### 3. Deploy
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Enable Pages in repository settings

## 🔧 Configuration

### Supabase Setup
1. Copy your Project URL and Anon Key from Supabase dashboard
2. Update `js/supabase-config.js`:
```javascript
const SUPABASE_URL = 'your-project-url'
const SUPABASE_ANON_KEY = 'your-anon-key'
```

### WhatsApp Integration
Update the phone number in appointment forms and WhatsApp buttons:
```javascript
const CLINIC_PHONE = '919811366344'
```

## 📊 Database Schema

### Appointments Table
- Patient information (name, phone, email)
- Service type and preferred date/time
- Status tracking (pending, confirmed, completed)

### Testimonials Table
- Patient feedback with ratings
- Approval system (pending, approved, rejected)
- Display on website after approval

## 🎨 Customization

### Colors and Branding
Edit `css/style.css` to customize:
- Primary colors
- Fonts
- Layout spacing
- Animations

### Content
Update content in HTML files:
- Clinic information
- Services offered
- Contact details
- About section

## 📱 Features Overview

### For Patients
- Browse services and information
- Book appointments online
- Submit testimonials
- Contact via WhatsApp
- View clinic gallery and blog

### For Clinic Staff
- Receive appointment notifications
- Manage bookings via admin dashboard
- Approve/reject testimonials
- Track patient feedback

## 🔒 Security

- Row Level Security (RLS) enabled on Supabase
- Input validation on all forms
- Secure API key management
- HTTPS enforcement recommended

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Designed and Developed by Kanishk Yadav**

## 📞 Support

For support and queries:
- Email: activelifephysiotherapyc@gmail.com
- Phone: +91 9811366344
- WhatsApp: +91 9811366344

## 🙏 Acknowledgments

- Bootstrap team for the excellent CSS framework
- Supabase for the backend infrastructure
- Font Awesome for the icons
- All the patients who provided testimonials

---

⭐ Star this repository if you found it helpful!