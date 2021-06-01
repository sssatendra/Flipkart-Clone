import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.css";

function Products() {
  const [items, setItems] = useState();
  const [electronics, setElectronics] = useState();

  const fetchProducts = async () => {
    console.log("Inside Async Function");
    const URL = "https://fakestoreapi.com/products?limit=50";
    const data = await fetch(URL);
    const jsonData = await data.json();
    setItems(jsonData);
  };

  const fetchElectronics = async () => {
    const URL = "https://fakestoreapi.com/products/category/electronics";
    const data = await fetch(URL);
    const jsonData = await data.json();
    setElectronics(jsonData);
  };

  function myFunction() {
    var x = Math.floor(Math.random() * 5 + 1);
    return x;
  }

  useEffect(() => {
    fetchProducts();
    fetchElectronics();
  }, []);

  // console.log("Idhar dekh le ");
  // console.log(items);

  return (
    <div className="products">
      <h2>Laptops</h2>
      <div className="products__dod">
        <Product
          id="1651981"
          image="https://rukminim1.flixcart.com/image/416/416/k9loccw0/computer/4/f/w/acer-na-gaming-laptop-original-imafrcpya8phvptc.jpeg?q=70"
          title="Acer Predator Helios 300 Core i5 10th Gen - (16 GB/1 TB HDD/256 GBSSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce RTX 2060/144 Hz)"
          rating={4.6}
          price={92990}
        />

        <Product
          id="1651894"
          image="https://rukminim1.flixcart.com/image/312/312/k9d3p8w0/computer/c/a/h/asus-na-laptop-original-imafr6cbfurgkspg.jpeg?q=70"
          title="ASUS Celeron Dual Core - (4 GB/1 TB HDD/Windows 10 Home) X543MA-GQ1015T Laptop  (15.6 inch, Transparent Silver, 1.9 kg)"
          rating={3.9}
          price={21990}
        />
        <Product
          id="16515981"
          image="https://rukminim1.flixcart.com/image/312/312/kfu0h3k0/computer/9/5/d/acer-na-thin-and-light-laptop-original-imafw7h8awgg8cfg.jpeg?q=70"
          title="Acer One 14 Pentium Gold - (4 GB/1 TB HDD/Windows 10 Home) Z2-485 Thin and Light Laptop  (14 inch, Silver, 1.8 kg)"
          rating={4}
          price={22990}
        />
        <Product
          id="165164981"
          image="https://rukminim1.flixcart.com/image/312/312/kd94uq80/computer/f/h/f/hp-na-thin-and-light-laptop-original-imafu6xgcwgb6xka.jpeg?q=70"
          title="HP Chromebook 14a Celeron Dual Core - (4 GB/64 GB EMMC Storage/Chrome OS) 14a-na0003tu Chromebook  (14 inch, Mineral Silver, 1.46 kg)"
          rating={3.7}
          price={24990}
        />
        <Product
          id="1654881981"
          image="https://rukminim1.flixcart.com/image/312/312/jzrb53k0/computer/q/a/t/asus-na-laptop-original-imafjhu7sbtwzwz9.jpeg?q=70"
          title="ASUS Vivobook 15 Celeron Dual Core - (4 GB/256 GB SSD/Windows 10 Home) X509MA-BR270T Laptop  (15.6 inches, Transparent Silver, 1.90 kg)"
          rating={3.9}
          price={25990}
        />
        <Product
          id="16124351981"
          image="https://rukminim1.flixcart.com/image/312/312/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70"
          title="Lenovo Ideapad Slim 3 Celeron Dual Core - (4 GB/256 GB SSD/Windows 10 Home) 15IGL05 Laptop  (15.6 inch, Platinum Grey, 1.85 kg)"
          rating={4.6}
          price={29500}
        />
        <Product
          id="1651q12312981"
          image="https://rukminim1.flixcart.com/image/416/416/kmns7m80/computer/k/i/x/na-gaming-laptop-acer-original-imagfgq6r2uz62pz.jpeg?q=70"
          title="Acer NITRO 5 Ryzen 5 Hexa Core 5600H - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) AN515-45-R712 Gaming Laptop  (15.6 inches, Black, 2.4 kg)"
          rating={3.5}
          price={71990}
        />
        <Product
          id="16519wqrrqwe2181"
          image="https://rukminim1.flixcart.com/image/416/416/kd4uj680/computer/h/b/p/msi-na-gaming-laptop-original-imafu3uez6dxdpjn.jpeg?q=70"
          title="MSI Bravo 15 Ryzen 5 Hexa Core 4600H - (16 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/AMD Radeon RX 5500M) Bravo 15 A4DDR-208IN Gaming Laptop  (15.6 inch, Black, 1.86 kg)"
          rating={4.6}
          price={72990}
        />
        <Product
          id="16519ewre43681"
          image="https://rukminim1.flixcart.com/image/416/416/kk76wsw0/computer/q/e/t/lenovo-original-imafzhsyrgfvamgy.jpeg?q=70"
          title="Lenovo Legion 5 Ryzen 5 Hexa Core 4600H - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/120 HZ) 5 15ARH05 Gaming Laptop  (15.6 inch, Phantom Black, 2.3 kg)"
          rating={4.6}
          price={66990}
        />
        <Product
          id="16512626981"
          image="https://rukminim1.flixcart.com/image/416/416/kcp4osw0/computer/t/f/z/asus-na-original-imaftrgwna6snfn8.jpeg?q=70"
          title="ASUS ROG Strix G15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650 Ti/144 Hz) G512LI-HN094T Gaming Laptop  (15.6 inch, Black Plastic, 2.3 kg)"
          rating={4.6}
          price={69990}
        />
        <Product
          id="165124r1981"
          image="https://rukminim1.flixcart.com/image/416/416/kk2wl8w0/computer/f/k/b/na-gaming-laptop-lenovo-original-imafzgdkvx9guy8q.jpeg?q=70"
          title="Lenovo Ideapad Gaming 3 Ryzen 5 Hexa Core 4600H - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/60 Hz) 15ARH05 Gaming Laptop  (15.6 inch, Onyx Black, 2.2 kg)"
          rating={4.6}
          price={59990}
        />
        <Product
          id="1651rtrey981"
          image="https://rukminim1.flixcart.com/image/416/416/jy3anbk0/computer/y/x/z/hp-na-gaming-laptop-original-imafgeyrwj6uhk6p.jpeg?q=70"
          title="HP Omen X 2S Core i9 9th Gen - (16 GB/2 TB SSD/Windows 10 Home/8 GB Graphics/NVIDIA GeForce RTX 2080) 15-dg0019TX Gaming Laptop  (15.6 inch, Shadow Black, 2.38 kg)"
          rating={4.6}
          price={335000}
        />
        <Product
          id="1651913242581"
          image="https://rukminim1.flixcart.com/image/416/416/kd94uq80/computer/p/8/n/alienware-original-imafu6wjugggkak8.jpeg?q=70"
          title="ALIENWARE Core i7 9th Gen - (16 GB/1 TB HDD/1 TB SSD/Windows 10 Home/8 GB Graphics) Area-51m Laptop  (17.3 inch, Dark Side Of The Moon, 4.7 kg, With MS Office)"
          rating={4.6}
          price={325680}
        />
      </div>

      <h2>New in Store</h2>
      <div className="products__suggested">
        {items?.map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              rating={Math.floor(Math.random() * 5 + 1)}
              price={Math.floor(item.price * 72.39)}
            />
          );
        })}
      </div>
      <h2>Electronics</h2>
      <div className="products__electronics">
        {electronics?.map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              rating={Math.floor(Math.random() * 5 + 1)}
              price={Math.floor(item.price * 72.39)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
