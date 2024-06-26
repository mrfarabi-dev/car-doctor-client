import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div>
        <div className="carousel h-[600px] font-serif rounded-sm w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img5}
          className="w-full rounded-sm object-cover"
        />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  text-white gap-4  top-0 p-20 w-full  h-full">
          <div className='space-y-7 w-1/3'>
              <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className='flex gap-4'>
                <button className='btn btn-outline bg-orange-600 text-white border-none rounded-sm'>Discover More</button>
                <button className='btn btn-outline border-white text-white rounded-sm'>Latest Project</button>
              </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-[500px]">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn bg-orange-600 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full rounded-sm object-cover"
        />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  text-white gap-4  top-0 p-20 w-full  h-full">
          <div className='space-y-7 w-1/3'>
              <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className='flex gap-4'>
                <button className='btn btn-outline bg-orange-600 text-white border-none rounded-sm'>Discover More</button>
                <button className='btn btn-outline border-white text-white rounded-sm'>Latest Project</button>
              </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-[500px]">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn bg-orange-600 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full rounded-sm object-cover"
        />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  text-white gap-4  top-0 p-20 w-full  h-full">
          <div className='space-y-7 w-1/3'>
              <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className='flex gap-4'>
                <button className='btn btn-outline bg-orange-600 text-white border-none rounded-sm'>Discover More</button>
                <button className='btn btn-outline border-white text-white rounded-sm'>Latest Project</button>
              </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-[500px]">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn bg-orange-600 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full rounded-sm object-cover"
        />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  text-white gap-4  top-0 p-20 w-full  h-full">
          <div className='space-y-7 w-1/3'>
              <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className='flex gap-4'>
                <button className='btn btn-outline bg-orange-600 text-white border-none rounded-sm'>Discover More</button>
                <button className='btn btn-outline border-white text-white rounded-sm'>Latest Project</button>
              </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-[500px]">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn bg-orange-600 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full rounded-sm object-cover"
        />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  text-white gap-4  top-0 p-20 w-full  h-full">
          <div className='space-y-7 w-1/3'>
              <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className='flex gap-4'>
                <button className='btn btn-outline bg-orange-600 text-white border-none rounded-sm'>Discover More</button>
                <button className='btn btn-outline border-white text-white rounded-sm'>Latest Project</button>
              </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-[500px]">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn bg-orange-600 btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img
          src={img6}
          className="w-full rounded-sm object-cover"
        />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute  text-white gap-4  top-0 p-20 w-full  h-full">
          <div className='space-y-7 w-1/3'>
              <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div className='flex gap-4'>
                <button className='btn btn-outline bg-orange-600 text-white border-none rounded-sm'>Discover More</button>
                <button className='btn btn-outline border-white text-white rounded-sm'>Latest Project</button>
              </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 top-[500px]">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn bg-orange-600 btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
