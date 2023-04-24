import UnleashMan from '../../assets/images/Unleash/unleash-man.png';
import UnleashBg from '../../assets/images/Unleash/trainer-bg.png';
import InstagramIcon from '../../assets/images/Unleash/instagram.svg';
import TikTokIcon from '../../assets/images/Unleash/tiktok.svg';
import YouTubeIcon from '../../assets/images/Unleash/youtube.svg';

function UnleashBanner() {
  return (
    <section className="flex h-max flex-col items-center justify-between bg-black pt-8 text-white lg:flex-row lg:px-36">
      <div className="space-y-1 pt-12 text-center text-2xl font-bold  lg:text-4xl">
        <h1>Need a Fitness Trainer?</h1>
        <h2>
          <span className="rounded-lg bg-[#0f766e] px-3">
            Call: +123-456789
          </span>
        </h2>
        <h2>Follow our Socials!</h2>
        <p className="flex items-center justify-center gap-4 pt-4">
          <img className="h-8" src={InstagramIcon} />
          <img className="h-8" src={TikTokIcon} />
          <img className="h-8" src={YouTubeIcon} />
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${UnleashBg})` }}
        >
          <img className="mx-auto" src={UnleashMan} alt="UnleashMan" />
        </div>
      </div>
    </section>
  );
}

export default UnleashBanner;
