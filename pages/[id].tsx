import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { BsCartPlusFill, BsCreditCard } from "react-icons/bs"
import { gifts } from "."

export default function Product() {
  const { query } = useRouter()
  const { id }: any = query

  const product = useMemo(() => {
    if (!id) {
      return {} as any
    }

    return gifts[id]
  }, [id])

  if (!id) {
    return <></>
  }

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
          <h2 className='pb-5 pt-5'>
            LISTA DE PRESENTES
          </h2>
          <img src="/images/arabesco.png" alt="Arabesco" className='arabesco mt-5' />
          <div className="row mt-5 justify-content-center pt-5">
            <div className="col-lg-5 col-12">
              <div className="row">
                <div className="gifts-open">
                  <img src={`/images/${product.id + 1}.jpeg`} alt="" />
                    <h3>{product.text}</h3>
                    <h4>{product.price} <BsCartPlusFill /></h4>
                    <p className="mt-5">
                      Opções de pagamento: PIX e Cartão de Crédito
                    </p>
                    <img src="/images/qrcode.png" alt="QR Code" />
                    <h5>
                      (67) 99113-8585
                    </h5>

                    <Link href={product.link} target="_blank">
                    <div className="button mt-4">
                      Cartão de Crédito
                      <BsCreditCard />
                    </div>
                    </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="/">
              <h2>
              Voltar
              </h2>
            </a>
          </div>
          <img src="/images/arabesco.png" alt="Arabesco" className='arabesco mt-5 pt-5' />
          <h2 className='pb-5 pt-5 mt-5'>
            OBRIGADO
          </h2>
        </div>
      </main>
    </>
  )
}