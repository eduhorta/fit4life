import Logo from '../../assets/images/Logo/logo.png';
import InstagramLogo from '../../assets/images/Footer/instagram.svg';
import TikTokLogo from '../../assets/images/Footer/tiktok.svg';
import YouTubeLogo from '../../assets/images/Footer/youtube.svg';

function Footer() {
  return (
    <section className="flex flex-col items-start justify-around space-y-8 p-12 lg:flex-row">
      <div className="lg: flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <img className="h-20" src={Logo} />
        <p className="py-6 text-justify lg:w-96">
          Elevate your physical health and fitness with our all-inclusive
          program, custom-made to assist you in achieving your desired fitness
          objectives.
        </p>
        <div className="flex items-center justify-start space-x-4 pb-6">
          <img className="h-8" src={InstagramLogo} />
          <img className="h-8" src={TikTokLogo} />
          <img className="h-8" src={YouTubeLogo} />
        </div>
        <h3>Privacy Policy | © 2023 Fit4Life</h3>
      </div>
      <div>
        <ul className="space-y-2">
          <li className="text-2xl font-bold">Our Classes</li>
          <li>Calisthenics</li>
          <li>Power</li>
          <li>Cardio</li>
          <li>Workout</li>
          <li>Anaerobic Exercise</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li className="text-2xl font-bold">Working Hours</li>
          <li className="font-semibold">Monday - Friday</li>
          <li>06:00am - 20:00pm</li>
          <li className="font-semibold">Saturday</li>
          <li>07:00am - 20:00</li>
          <li className="font-semibold">Sunday</li>
          <li>Closed</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
