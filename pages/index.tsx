import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { BsCartPlusFill, BsEnvelope } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const gifts = [
  {
    id: 0,
    text: 'Diária Hotel Boutique Bahia Bonita',
    price: 'R$ 1.049,00',
    link: 'https://digixpay.paytime.com.br/link?id=1ce3ебе345282823a0c94572bef9d9'
  },
  {
    id: 1,
    text: 'Mergulho Parque Marinho Recife de Fora',
    price: 'R$ 920,00',
    link: 'https://digixpay.paytime.com.br/link?id=f8a26bb636decd3a1cb482a444dad467'
  },
  {
    id: 2,
    text: 'Passeio Praia dos Nativos e Praia dos Coqueiros',
    price: 'R$ 810,00',
    link: 'https://digixpay.paytime.com.br/link?id=222afbe0d68c61de60374b96f1d86715'
  },
  {
    id: 3,
    text: 'Cota Passeio Caraíva - BA',
    price: 'R$ 730',
    link: 'https://digixpay.paytime.com.br/link?id=42cbf4730aeac1d645324d4818104826'
  },
  {
    id: 4,
    text: 'Cota Passeio Quadrado de Trancoso',
    price: 'R$ 649,00',
    link: 'https://digixpay.paytime.com.br/link?id=7aaece81f2d731fbf8ee0ad3521002ac'
  },
  {
    id: 5,
    text: 'Cota Passeio de Lancha em Trancoso',
    price: 'R$ 549,00',
    link: 'https://digixpay.paytime.com.br/link?id=55063089b08df5797d3eebca7c087ed4'
  },
  {
    id: 6,
    text: 'Cota Passeio Quadriciclo Trancoso',
    price: 'R$ 440,00',
    link: 'https://digixpay.paytime.com.br/link?id=959776b99b006e5785c3a3364949ce47'
  },
  {
    id: 7,
    text: 'Cota Passeio Arraial d’Ajuda Eco Parque',
    price: 'R$ 360,00',
    link: 'https://digixpay.paytime.com.br/link?id=73bf6c41e241e28b89d0fb9e0c8219ce'
  },
  {
    id: 8,
    text: 'Cota Passeio Praia do Espelho',
    price: 'R$ 260,00',
    link: 'https://digixpay.paytime.com.br/link?id=110e7d180dc9a996341b90c4e61101db'
  },
  {
    id: 9,
    text: 'Aspirador Robô Xiaomi MOP 3 em 1 Varre, Aspira e Passa Pano',
    price: 'R$ 500,00',
    link: 'https://digixpay.paytime.com.br/link?id=0044deeec43ded19b952125079eb1781'
  },
  {
    id: 10,
    text: 'Lava-Louças 10 Serviços Brastemp',
    price: 'R$ 1.200,00',
    link: 'https://digixpay.paytime.com.br/link?id=d28d296b68b6ac1232353531256488b3'
  },
  {
    id: 11,
    text: 'Cota Passagem Aérea para Trancoso',
    price: 'R$ 600,00',
    link: 'https://digixpay.paytime.com.br/link?id=a052f1fccf47b66d047f2234c53f1597'
  },
  {
    id: 12,
    text: 'Jantar romântico',
    price: 'R$ 450,00',
    link: 'https://digixpay.paytime.com.br/link?id=76bba5ee241042431796c97a92e64f5d'
  }
]

export default function Home() {
  const router = useRouter()

  const [page, setPage] = useState(0)

  return (
    <>
      <Head>
        <title>Casamento Isa e Jeff</title>
        <meta name="description" content="Seja bem vindo ao nosso cantinho on-line!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container text-center">
          <h1 className='py-5'>CASAMENTO ISA E JEF</h1>
          <p className='pb-5 mb-5'>
            NEM OLHOS VIRAM, NEM OUVIDOS OUVIRAM AQUILO QUE DEUS PREPAROU PARA AQUELES QUE O AMAM. (1CORÍNTIOS 2:9)
            <br />
            <br />
            O que começou por um jogo de vídeo game que eu (Isabella) perdi, juntou duas vidas, duas famílias. Começamos a namorar, viajamos, abrimos empresas, viajamos mais um pouco, ficamos noivos e agora comemoraremos de vez a nossa união. Em abril, celebraremos um dia para lá de especial, abrindo os braços para as pessoas que mais amamos nesse mundo - e, acreditem, já estamos morrendo de ansiedade para a hora chegar!
          </p>
          {
            page === 0 && (
              <div>
                <img src="/images/casal.jpg" />
                
                <div className="row">
                  <div className="col-6">
                    <div className="button mt-4 text-center justify-content-center" onClick={() => setPage(2)}>
                      Confirmação de Presença
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="button mt-4 justify-content-center" onClick={() => setPage(1)}>
                      Lista de Presentes
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          {
            page === 1 && (
              <div>
                <h2 className='pb-5 pt-5'>
                  LISTA DE PRESENTES
                </h2>
                <img src="/images/arabesco.png" alt="Arabesco" className='arabesco mt-5' />
                <div className="row mt-5 justify-content-center pt-5">
                  <div className="col-lg-8 col-12">
                    <div className="row">
                      {
                        gifts.map(gift => (
                          <div key={gift.id} className="col-6" onClick={() => router.push('/' + gift.id)}>
                            <div className="gifts">
                              <img src={`/images/${gift.id + 1}.jpeg`} alt="" />
                              <h3>{gift.text}</h3>
                              <h4>{gift.price} <BsCartPlusFill /></h4>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-12">
                        <div className="button justify-content-center" onClick={() => setPage(0)}>
                          Voltar
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src="/images/arabesco.png" alt="Arabesco" className='arabesco mt-5 pt-5' />
              </div>
            )
          }
          {
            page === 2 && (
              <div>
                <img src="/images/arabesco.png" alt="Arabesco" className='arabesco mt-5' />
                <h2 className='pb-5 pt-5 mt-5'>
                  CONFIRMAÇÃO DE PRESENÇA
                </h2>
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-12">
                    <input type="text" placeholder='Nome completo' />
                    <select name="qtd" id="qtd">
                      <option value="">Selecione a quantidade de pessoas</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <textarea name="observacao" id="observacao" placeholder='Observações (Justifique as pessoas a mais que levará)'></textarea>
                    <textarea name="mensagem" id="mensagem" placeholder='Deixe uma mensagem para os noivos!'></textarea>

                    <div className="row justify-content-between">
                      <div className="col-lg-4 col-12">
                        <div className="button">
                          Enviar confirmação
                          <BsEnvelope />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="button justify-content-center" onClick={() => setPage(0)}>
                          Voltar
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img src="/images/arabesco.png" alt="Arabesco" className='arabesco mt-5 pt-5' />
              </div>
            )
          }
          <h2 className='pb-5 pt-5 mt-5'>
            OBRIGADO!
          </h2>
        </div>
      </main>
    </>
  )
}
