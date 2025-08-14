// Supabase configuration
const SUPABASE_URL = 'https://avidkzafwhzfktaizpyu.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2aWRremFmd2h6Zmt0YWl6cHl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMTc3NDQsImV4cCI6MjA3MDU5Mzc0NH0.usiMCBsXe_XFNJycRhM1ahP6SuLQcnN0cOhlTdknb3w'

// Initialize Supabase client
let supabase;

// Wait for Supabase library to load
function initSupabase() {
    if (typeof window.supabase !== 'undefined') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        return true;
    }
    return false;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Try to initialize immediately
    if (!initSupabase()) {
        // If not ready, wait a bit and try again
        setTimeout(initSupabase, 100);
    }
});

// Function to submit appointment
async function submitAppointment(formData) {
    try {
        // Ensure Supabase is initialized
        if (!supabase) {
            if (!initSupabase()) {
                throw new Error('Supabase not initialized');
            }
        }

        const { data, error } = await supabase
            .from('appointments')
            .insert([{
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                service: formData.get('service'),
                preferred_date: formData.get('date'),
                preferred_time: formData.get('time'),
                message: formData.get('message')
            }])
            .select()

        if (error) throw error
        return { success: true, data }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

// Function to submit testimonial
async function submitTestimonial(name, email, message, rating) {
    try {
        if (!supabase) {
            if (!initSupabase()) {
                throw new Error('Supabase not initialized');
            }
        }

        const { data, error } = await supabase
            .from('testimonials')
            .insert([{
                name: name,
                email: email,
                message: message,
                rating: rating,
                status: 'pending'
            }])
            .select()

        if (error) throw error
        return { success: true, data }
    } catch (error) {
        return { success: false, error: error.message }
    }
}

// Function to get approved testimonials
async function getTestimonials() {
    try {
        if (!supabase) {
            if (!initSupabase()) {
                throw new Error('Supabase not initialized');
            }
        }

        const { data, error } = await supabase
            .from('testimonials')
            .select('*')
            .eq('status', 'approved')
            .order('created_at', { ascending: false })

        if (error) throw error
        return { success: true, data }
    } catch (error) {
        return { success: false, error: error.message }
    }
}