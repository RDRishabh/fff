const DropdownServices = ({ mobile = false }) => {
  const data = {
    Design: {
      items: [
        "Web app design",
        "Mobile app design",
        "Website design",
        "Website redesign",
        "Branding",
      ],
      image: "/assets/design-preview.png",
    },
  };

  if (mobile) {
    return (
      <div className="flex flex-col gap-2">
        {data.Design.items.map((item, idx) => (
          <p key={idx} className="text-base text-gray-700 hover:text-black cursor-pointer">
            {item}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white text-black shadow-xl w-full max-w-screen-xl mx-auto grid grid-cols-3 gap-4 p-8 rounded-lg">
      {/* Sidebar */}
      <div className="col-span-1 flex flex-col border-r pr-6">
        <button className="text-black font-semibold uppercase py-2">Design</button>
        <button className="text-gray-400 uppercase py-2">Development</button>
        <button className="text-gray-400 uppercase py-2">Research</button>
      </div>

      {/* Middle List */}
      <div className="col-span-1 flex flex-col justify-center pl-4">
        {data.Design.items.map((item, idx) => (
          <p key={idx} className="text-lg mb-2 hover:text-primary cursor-pointer">
            {item}
          </p>
        ))}
      </div>

      {/* Image */}
      <div className="col-span-1 flex items-center justify-center">
        <img
          src={data.Design.image}
          alt="design"
          className="rounded-lg max-w-full max-h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default DropdownServices;
