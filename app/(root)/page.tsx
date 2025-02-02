import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { sampleBooks } from '@/constants'

const Home = () => {
  const randomNumber = Math.random() * (sampleBooks.length - 1)

  return (
    <>
      <BookOverview {...sampleBooks[randomNumber.toFixed(0)]} />
      <BookList
        title='Latest Books'
        books={sampleBooks}
        containerClasName='mt-28'
      />
    </>
  )
}

export default Home
