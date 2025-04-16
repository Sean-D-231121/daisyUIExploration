

function Herosection () {

    return (
      <>
        <div className="hero bg-base-200 min-h-screen rounded-lg">
          <div className="hero-content flex-col lg:flex-row ">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-6xl font-bold text-neutral">
                Looking for the newest shows sign up here
              </h1>
              <p className="py-6  text-2xl text-neutral">
                Just go click below to get latest shows
              </p>
              <button className="btn btn-soft btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Herosection;