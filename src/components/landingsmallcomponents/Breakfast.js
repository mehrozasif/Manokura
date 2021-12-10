import React from "react";

const Breakfast = () => {
  return (
    <div className="row mx-auto bg-breakfast p-xl-5">
      <div className="col-xl-10 col-xxl-9 py-5 my-xl-5 mx-auto">
        <div className="row mx-auto py-xl-5 py-4 text-white">
          <div className="col-xl-5 col-xxl-4">
            <h1 className="moret my-2 my-xl-4">Supercharge your breakfast</h1>
            <p className="sans my-2 my-xl-4">
              Our raw Mānuka honey is a powerful addition to your daily rituals.
              Drizzle Manukora honey over pancakes or waffles, take your tea or
              coffee to the next level, or enjoy a dose daily straight from the
              spoon. Think of it as your new breakfast BFF.
            </p>
            <div className="my-2 my-xl-4">
              <button class="btn-yellow border-0 px-3 px-xl-5 py-xl-2 py-xxl-3 py-2 sans">
                SHOP MĀNUKA HONEY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
