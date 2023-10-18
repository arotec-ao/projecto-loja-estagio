import React from "react"
import {  Link } from "react-router-dom"
import { BsTruck} from 'react-icons/bs';
import {BiDollarCircle} from 'react-icons/bi';
import {MdCardMembership} from 'react-icons/md';
import { TfiHeadphoneAlt} from 'react-icons/tfi';
import {PiShoppingCartBold} from 'react-icons/pi';
import {ImEye} from 'react-icons/im';
import {AiOutlineHeart, AiOutlineCloseCircle} from 'react-icons/ai';
import Homeproduto from '../homeproduto';
import './estilos/home.css'
const Home = ({detalhe, ver, fechar, setFechar, addcarrinho}) => {
    return(
        <>
         {
            fechar ?
    
        <div className='detalhe_produto'>
            <div className='container'>
                <button onClick={() => setFechar(false)} className='btnfechar'><AiOutlineCloseCircle /></button>
                {
                    detalhe.map((curElm) =>
                    {
                        return(
                            <div className='boxproduto'>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Titulo}></img>
                                </div>
                                <div className='detalhe'>
                                    <h4>{curElm.Cat}</h4>
                                    <h2>{curElm.Titulo}</h2>
                                    <p>lorem lorem lorem lorem lorem lorem</p>
                                    <h3>{curElm.Preco}</h3>
                                    <button>Adicionar ao carrinho</button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='boxproduto'></div>
            </div>
        </div> : null
        }
        <div className="top_banner">
            <div className="container">
                <div className="detalhe">
                    <h2>Os Melhores Dispositivos Electrónicos</h2>
                    <div className="container1">
                    <button>
                        <Link to='/produto' className='link'>Compre agora</Link>
                    </button>
                    </div>
                </div>
                <div className="img_box">
                <img src='./img/slider-img.png' alt="slider"></img>
                </div>
            </div>
        </div>
        <div className="destaque">
            <div className="container">
            <div className='box'>
                <div className="box_img">
                    <img src='.\img\Mobile Phone.png' alt='mobile'></img>
                </div>
                </div>
                <div className='box'>
                <div className="box_img">
                    <img src='.\img\smart watch.png' alt='mobile'></img>
                </div>
            </div>
            <div className='box'>
                <div className="box_img">
                    <img src='.\img\tp6.png' alt='mobile'></img>
                </div>
            </div>
            <div className='box'>
                <div className="box_img">
                    <img src='.\img\headphone.png' alt='mobile'></img>
                </div>
            </div>
        </div>
        </div>
        <div className="sobre">
           <div className="container">
            <div className="box">
                <div className="icone">
                    <BsTruck/>
                </div>
                <div className="detalhe">
                    <h3>Entrega Grátis</h3>
                    <p>Compras acima de 100.000kz</p>
                </div>
                </div>
            <div className="box">
                <div className="icone">
                    <BiDollarCircle/>
                </div>
                <div className="detalhe">
                    <h3>Devolução e reembolso</h3>
                    <p>O seu dinheiro de volta</p>
                </div>
            </div>
            <div className="box">
                <div className="icone">
                    <MdCardMembership/>
                </div>
                <div className="detalhe">
                    <h3>Desconto de usuário</h3>
                    <p>Em cada compra</p>
                </div>
            </div>
            <div className="box">
                <div className="icone">
                    <TfiHeadphoneAlt/>
                </div>
                <div className="detalhe">
                    <h3>Suporte ao cliente</h3>
                    <p>Sempre que ligar ao suporte</p>
                </div>
            </div>
            </div> 
        </div>
        <div className="produto">
            <h2>Em Destaque</h2>
            <div className="container">
                {
                    Homeproduto.map((curElm) =>
                    {
                        return(
                            <div className="box" key={curElm.id}>
                            <div className="img_box">
                                <img src={curElm.Img} alt={curElm.Titulo}></img>
                                <div className="icone">
                                    <li onClick={() => addcarrinho(curElm)}> <PiShoppingCartBold/></li>
                                    <li onClick={() => ver(curElm)}><ImEye/></li>
                                    <li> <AiOutlineHeart/></li>
                                </div>
                            </div>
                            <div className="detalhe">
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Titulo}</h3>
                                <h4>{curElm.Preco}kz</h4>
                            </div>
                            </div>
                        )
                        })
                    }
            </div>
        </div>
        <div className="banner">
            <div className="container">
            <div className="detalhe">
                <h6>A tecnologia mais recente</h6>
                <h3>PlayStation 5 Pro Slim</h3>
                <p>1.000.00Kz</p>
                <button>
                        <Link to='/produto' className='link'>Compre agora</Link>
                    </button>
            </div>
            <div className="img_box">
                <img src="./img/pl.png" alt="play"></img>
            </div>
            </div>
         </div>
        </>
    )
}
export default Home