"use client"
import BannerMain from "./components/BannerMain";
import SliderProducts from "./components/SliderProducts";
import Highlights from "./components/Highlights";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import Header from "./components/Header";
import Footer from "./components/Footer";

const sliderMetal = {
  titleSlider: "Máquinas Metal",
  colorTitle: "text-white",
  classNameItem: "bg-metalslider",
  products: [
    {
      titleProduct: "Dobradeira de Tubos e Perfis",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-001/dobradeira-de-tubos-e-perfis.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Dobradeira de Tubos e Perfis",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-001/dobradeira-de-tubos-e-perfis.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Dobradeira de Tubos e Perfis",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-001/dobradeira-de-tubos-e-perfis.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Dobradeira de Tubos e Perfis",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-001/dobradeira-de-tubos-e-perfis.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    }
  ]
}

const sliderPapel = {
  titleSlider: "Máquinas Papel",
  colorTitle: "text-black",
  classNameItem: "bg-papelslider",
  products: [
    {
      titleProduct: "Guilhotinas para Papel e Cartão",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-002/guilhotinas-para-papel-e-cartao.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Máquinas de Corte e Vinco e Hot Stamping",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-002/maquinas-de-corte-e-vinco-hot-stamping.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Resmadeiras | Cortadora de Bobinas em Folha Solta",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-002/resmadeiras-cortadora-de-bobinas-em-folha-solta.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Acopladoras Papel, Cartão e Ondulado",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-002/acopladoras-micro-ondulado-e-cartao.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Máquinas de Sacos e Sacolas de Papel",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-002/maquinas-de-sacos-de-papel-fundo-quadrado.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    }
  ]
}

const sliderPlastico = {
  titleSlider: "Máquinas Plástico",
  colorTitle: "text-white",
  classNameItem: "bg-plasticoslider",
  products: [
    {
      titleProduct: "Máquinas Injetoras Fechamento Horizontal Série HNR - Hidráulica",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-003/serie-hnr-hidraulica.jpg",
        alt: "Máquinas Injetoras Fechamento Horizontal Série HNR - Hidráulica"
      }
    },
    {
      titleProduct: "Compressores de Ar",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-001/compressores-de-ar.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Máquinas Injetoras Fechamento Horizontal Série HRFC - Servo Hidráulica",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-003/serie-hrfc-servo-hidraulica.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Máquinas Injetoras Fechamento Horizontal Série NRH com Dupla Placa (Double Platen)",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-003/platen.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Máquinas Injetoras Fechamento Vertical Série YH",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-003/serie-yh.jpg",
        alt: "Máquinas Injetoras Fechamento Horizontal Série HNR - Hidráulica"
      }
    }
  ]
}

const sliderMadeira = {
  titleSlider: "Máquinas Madeira",
  colorTitle: "text-black",
  classNameItem: "bg-papelslider",
  products: [
    {
      titleProduct: "Coladeiras de Bordas",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-004/coladeiras-de-bordas.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Furadeiras CNC",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-004/furadeiras-cnc.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Máquinas de Laminação a Vácuo",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-004/maquina-de-laminacao-a-vacuo.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
      titleProduct: "Máquinas Router",
      imageProduct: {
        src: "https://www.dsm.com.br/cssDSM/img/carrossel-004/maquinas-router.jpg",
        alt: "Dobradeira de Tubos e Perfis"
      }
    },
    {
        titleProduct: "Compressores de Ar",
        imageProduct: {
          src: "https://www.dsm.com.br/cssDSM/img/carrossel-001/compressores-de-ar.jpg",
          alt: "Dobradeira de Tubos e Perfis"
      }
    }
  ]
}



export default function Home() {
  return (
    <>
      <Header />
      <BannerMain />
      <SliderProducts titleSlider={sliderMetal.titleSlider} colorTitle={sliderMetal.colorTitle} products={sliderMetal.products} classNameItem={sliderMetal.classNameItem}  />
      <SliderProducts titleSlider={sliderPapel.titleSlider} colorTitle={sliderPapel.colorTitle} products={sliderPapel.products} classNameItem={sliderPapel.classNameItem}  />
      <SliderProducts titleSlider={sliderPlastico.titleSlider} colorTitle={sliderPlastico.colorTitle} products={sliderPlastico.products} classNameItem={sliderPlastico.classNameItem}  />
      <SliderProducts titleSlider={sliderMadeira.titleSlider} colorTitle={sliderMadeira.colorTitle} products={sliderMadeira.products} classNameItem={sliderMadeira.classNameItem}  />
      <Highlights />
      <Services />
      <Newsletter />
      <Footer />
    </>
  );
}
