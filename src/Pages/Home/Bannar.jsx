
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Bannerstyles.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Bannar = () => {
    return (
         
        <div className='mt-20'>
          
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'backgroundImage':
              'url(https://i.ibb.co/cXttHFz/trees-beside-lake-natural-landscape.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title text-cyan-400" data-swiper-parallax="-300">
          France 
          </div>
          
          <div className="text text-cyan-800" data-swiper-parallax="-100">
            <p>
            France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in nearly all aspects of culture, including cuisine, wine-making, politics, philosophy, music, art, film, fashion, literature, and sports.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title text-cyan-400" data-swiper-parallax="-300">
          Netherlands
          </div>
          
          <div className="text text-cyan-800" data-swiper-parallax="-100">
            <p>
            Now a constitutional monarchy, the country began its independent life as a republic in the 16th Century, during a long struggle with Hapsburg Spain, when the foundations were laid for it to become one of the world's foremost maritime trading nations.

Although traditionally among the keener advocates of the European Union, Dutch voters echoed those in France by spurning the proposed EU constitution in a 2005 referendum.

The Netherlands has produced many of the world's most famous artists from Rembrandt and Vermeer in the 17th Century to Van Gogh in the 19th and Mondrian in the 20th. It attracts visitors from across the globe.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title text-cyan-400" data-swiper-parallax="-300">
          Spain
          </div>
          
          <div className="text text-cyan-800" data-swiper-parallax="-100">
            <p>
            Spain is easy enough to travel in. It’s affordable and has good public transport. It’s safe enough if you’re more cautious than you would be at home. We fell victim to a pick-pocket but the wallet really shouldn’t have been in an accessible pocket whilst we rode the subway. Lesson: things that are okay in New Zealand are not safe overseas.

A common complaint when travelling in Spain is that you will, not often but sometimes, be frustrated by the siesta thing. Now, I am not opposed to siestas. Contrary to what some people believe, the Spanish really do earn their siestas. They get up at the crack of dawn and labour all morning, putting in hours of work before most office workers have even sat down at their desks. I have volunteered on a farm in Spain and in that context siestas make perfect sense. You can’t be out doing manual labour in the hot afternoon sunshine. It’s not just disagreeable, it’s unsafe. But I still wonder how on earth it makes sense in the context of, say, a museum? Are the museum staff really going all the way home between 1pm and 4pm? Doesn’t it just mean commuting twice a day instead of once? Isn’t it very annoying to close everything and open it all up again? Wouldn’t they rather just finish their day earlier? I don’t know. Perhaps it works for them. Perhaps they love it. At any rate, the logistics of it are not my problem but I wanted to note that it certainly doesn’t lend itself to the style of travel when you show up in a town with not much of a plan and just a day or two to try and check off all the major attractions. You can find yourself at a loose end in the afternoon. It can be frustrating but you can’t change things in the slightest so (and now we come to the actual point of this paragraph) I urge you to research attraction opening times in advance.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      
       
    );
};

export default Bannar;