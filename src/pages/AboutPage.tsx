import React from 'react';
import { Shield, Target, Briefcase, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield size={56} className="text-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bridging the gap between military service and civilian careers by
            connecting veterans with opportunities, mentors, and resources.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                VetCareers was founded by a group of veterans who experienced firsthand
                the challenges of transitioning from military service to civilian careers.
                Despite having exceptional skills, leadership experience, and discipline,
                many veterans struggle to find meaningful employment that values their
                military background.
              </p>
              <p className="text-gray-700 mb-6">
                Recognizing the need for a comprehensive solution, we created a platform
                that not only connects veterans with job opportunities but also provides
                the tools, resources, and mentorship needed for successful career transitions.
              </p>
              <p className="text-gray-700">
                Today, VetCareers serves thousands of veterans across India, helping them
                translate their military experience into civilian success stories.
              </p>
            </div>
            <div className="md:w-1/2 bg-light-blue rounded-lg p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Impact at a Glance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-navy">60K+</p>
                  <p className="text-gray-600">Veterans Served</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-navy">85%</p>
                  <p className="text-gray-600">Placement Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-navy">500+</p>
                  <p className="text-gray-600">Employer Partners</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-navy">300+</p>
                  <p className="text-gray-600">Veteran Mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-light-blue rounded-lg">
              <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Service</h3>
              <p className="text-gray-700">
                We are committed to serving those who have served our country,
                providing the support and resources veterans need to thrive in
                civilian careers.
              </p>
            </div>
            <div className="p-6 bg-light-blue rounded-lg">
              <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Community</h3>
              <p className="text-gray-700">
                We believe in the power of community and connection, fostering
                relationships between veterans, mentors, and employers to create
                a supportive ecosystem.
              </p>
            </div>
            <div className="p-6 bg-light-blue rounded-lg">
              <div className="bg-navy w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Excellence</h3>
              <p className="text-gray-700">
                We uphold the highest standards in everything we do, honoring
                the excellence instilled through military service and carrying
                it forward into civilian opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg flex items-center justify-center h-24">
                <span className="text-lg font-bold text-navy">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-army-green text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8">
            Whether you're a veteran seeking opportunities, an employer looking to hire
            top talent, or a professional wanting to mentor, there's a place for you in
            our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="btn bg-gold text-navy hover:bg-gold/90 focus:ring-gold">
              Create an Account
            </a>
            <a href="/contact" className="btn bg-white text-navy hover:bg-gray-100 focus:ring-white">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const teamMembers = [
  {
    name: "Major Rakesh Singh (Retd.)",
    role: "Founder & CEO",
    background: "20 years in Indian Army",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Priya Mehta",
    role: "Chief Operations Officer",
    background: "15 years in HR & Operations",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Commander Aditya Sharma (Retd.)",
    role: "Director of Employer Relations",
    background: "18 years in Indian Navy",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Deepa Krishnan",
    role: "Head of Technology",
    background: "12 years in Software Development",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const partners = [
  "Indian Army Veterans Association",
  "National Skills Development Council",
  "TechForce India",
  "Veterans Welfare Foundation",
  "Corporate Alliance Network",
  "Defense Industry Association",
  "Veterans Training Institute",
  "Career Transition Center"
];

export default AboutPage;