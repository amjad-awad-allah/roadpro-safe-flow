
const WhatsAppButton = () => {
  const phoneNumber = "+971501234567"; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20RoadPro,%20I%20would%20like%20to%20inquire%20about%20your%20services.`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg 
        hover:scale-110 transition-all duration-300 hover:shadow-xl animate-pulse [animation-duration:3s]"
      aria-label="Chat with us on WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="24" 
        height="24" 
        fill="currentColor"
      >
        <path d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1.6 2.4.9 3.7.9 4.3 0 7.8-3.5 7.8-7.8.1-2-.7-3.9-2.2-5.4zm-5.5 11.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.3-.2-.2c-.6-1-1-2.2-1-3.3 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.6 1.9 1.2 1.2 1.9 2.8 1.9 4.6 0 3.5-2.9 6.5-6.5 6.5zM16 12.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.4.7-.6.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-.9-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3l.1-.2c.1-.1 0-.2 0-.3 0-.1-.4-1-.6-1.4-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3 0-.5.2-.2.2-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1.4 2.1 3.3 2.9.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.2-.5 1.3-1 .1-.5.1-.9 0-1-.1 0-.3-.1-.5-.2z"></path>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
