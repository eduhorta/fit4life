import MainButton from '../Buttons/MainButton';

function ChooseUsBanner() {
  return (
    <div className="flex h-72 flex-col items-center justify-center gap-6 bg-gradient-to-b from-black via-teal-700 to-black text-3xl font-bold text-white">
      <h1 className="mx-2 text-center">The Best Fitness Service For You</h1>
      <MainButton size="sm" textSize="lg" />
    </div>
  );
}

export default ChooseUsBanner;
