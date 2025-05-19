import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Dashboard.css'; 

const data = [
  { id: 1, image: 'src/img/dashboard2.png' },
  { id: 2, image: 'src/img/dashboard4.png' },
  { id: 3, image: 'src/img/dashboard4.png' },
];

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <header className="header">
        <img src="src/img/logofiebnova.png" alt="FIEB CDM" className="logo-dashboard" />
        <nav>
          <ul>
            <li><a href="/cardapio">Cardápio</a></li>
           
            <li><a href="/qrcode">QrCode</a></li>
           
            <li><a href="/usuarios">Usuários</a></li>
            
            <li className="logout"><a href="/">Sair</a></li>
          </ul>
        </nav>
      </header>

      
      <main className="dashboard-content">
       
        
        <Swiper
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} 
          modules={[Autoplay]} 
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt={`Slide ${item.id}`} className="slide-item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
};

export default Dashboard;