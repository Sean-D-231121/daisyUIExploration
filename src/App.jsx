
import './App.css'
import Herosection from './components/Herosection'
import SignupForm from './components/SignupForm';

function App() {


  return (
    <>
      <div class="container mx-auto px-4">
        <Herosection />

        <div class="flex ...">
          <div class="w-14 flex-none ..."></div>
          <div class="w-64 flex-auto ...">
            <div className="join join-vertical bg-base-100">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title font-semibold">
                  How do I create an account?
                </div>
                <div className="collapse-content text-sm">
                  Click the "Sign Up" button in the top right corner and follow
                  the registration process.
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  I forgot my password. What should I do?
                </div>
                <div className="collapse-content text-sm">
                  Click on "Forgot Password" on the login page and follow the
                  instructions sent to your email.
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  How do I update my profile information?
                </div>
                <div className="collapse-content text-sm">
                  Go to "My Account" settings and select "Edit Profile" to make
                  changes.
                </div>
              </div>
            </div>
          </div>
          <div class="w-32 flex-1  ...">
            <div className="carousel rounded-box w-64">
              <div className="carousel-item w-full">
                <img
                  src="https://i.pinimg.com/236x/64/0b/6a/640b6a04ccc407c169a03977852f72bd.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://i.pinimg.com/474x/18/52/88/1852885af9eb469a5c0f1ef22e3fd087.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://i.pinimg.com/474x/6b/b2/22/6bb222ec4acce00f1929943ef3b6c9b9.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://i.pinimg.com/474x/dd/55/65/dd55659ba273f0a3c7fa647bdd8eec32.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://i.pinimg.com/236x/37/53/ca/3753caceae46a638e9c0d7a42df6e32d.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://i.pinimg.com/236x/64/0b/6a/640b6a04ccc407c169a03977852f72bd.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item w-full">
                <img
                  src="https://i.pinimg.com/236x/07/dc/72/07dc723d030d82d4b77078cc53c7f357.jpg"
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
            </div>
          </div>
        </div>
        <SignupForm />
      </div>
    </>
  );
}

export default App
