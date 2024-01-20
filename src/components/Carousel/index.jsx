import { useRef } from "react"
import PropTypes from 'prop-types';

const Carousel = ({ children }) => {
  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const handleRightClick = (e) => {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }
  return (
    <>
      <section className='carousel' ref={carousel}>
        {children}
      </section>
      <div className="fs-1 container justify-content-center d-flex text-black">
        <button className='btn fs-1 text-black' onClick={handleLeftClick}>
          <i className="bi bi-arrow-left-circle-fill me-3"></i>
        </button>
        <button className='btn fs-1 text-black' onClick={handleRightClick}>
          <i className="bi bi-arrow-right-circle-fill ms-3"></i>
        </button>
      </div>
    </>
  )
}

Carousel.propTypes = {
  children: PropTypes.node
}

export default Carousel
