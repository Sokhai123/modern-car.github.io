import { useRef } from 'react'
import './App.css'

const cars = [
  {
    id: 1,
    name: "2023 Tesla Model S",
    description: "Electric, 396 miles range, 0-60 mph in 1.99 seconds",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "2022 BMW M3",
    description: "High performance sports sedan, 473 hp, 0-60 mph in 3.8 seconds",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "2021 Audi RS7",
    description: "Luxury hatchback, 591 hp, 0-60 mph in 3.5 seconds",
    img: "https://images.unsplash.com/photo-1511919884226-9e3bfb16d1be?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "2023 Porsche 911",
    description: "Iconic sports car, 443 hp, 0-60 mph in 3.5 seconds",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "2022 Mercedes AMG GT",
    description: "Luxury sports coupe, 523 hp, 0-60 mph in 3.7 seconds",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "2023 Ford Mustang Mach-E",
    description: "Electric SUV, 480 hp, 0-60 mph in 3.5 seconds",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "2023 Nissan GT-R",
    description: "Supercar, 565 hp, 0-60 mph in 2.9 seconds",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "2022 Chevrolet Corvette",
    description: "American sports car, 495 hp, 0-60 mph in 2.9 seconds",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
  },
]

function App() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">
          <h2 className="logo">CarSeller</h2>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#cars">Cars</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="profile-icon" title="Profile">
            <span>JS</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to CarSeller</h1>
        <p>Find your dream car here.</p>

        {/* Horizontal scroll container */}
        <div className="carousel-container">
          <button
            className="scroll-btn left"
            aria-label="Scroll left"
            onClick={() => scroll('left')}
          >
            &#8592;
          </button>
          <div className="car-cards-wrapper" ref={scrollRef}>
            {cars.map(car => (
              <div key={car.id} className="car-card">
                <img src={car.img} alt={car.name} className="car-image" />
                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p>{car.description}</p>
                  <button onClick={() => alert(`Contact Seller for ${car.name}`)}>
                    Contact Seller
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            className="scroll-btn right"
            aria-label="Scroll right"
            onClick={() => scroll('right')}
          >
            &#8594;
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CarSeller. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
