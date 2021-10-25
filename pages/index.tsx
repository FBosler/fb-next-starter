import Head from 'next/head'
import AtcButton from 'components/AtcButton'
import productBundle from 'data/productBundle.json'

const items = productBundle.map((item) => item.id) as string[]

const Home = (): JSX.Element => {
  const addToCart = async (): Promise<void> => {
    try {
      console.log(items)

      //await addItem(items)
      //trackAddToCart()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <AtcButton price="110" addToCart={addToCart} />
      </main>
    </div>
  )
}

export default Home
