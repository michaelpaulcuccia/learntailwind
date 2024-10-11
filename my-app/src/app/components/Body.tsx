const Body = () => {
  return (
    <main className="flex-1 p-4 relative overflow-hidden">
      <img
        src="/images/screenshot.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ objectFit: "contain" }}
      />
    </main>
  );
};

export default Body;
