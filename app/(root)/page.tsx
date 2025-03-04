import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { sampleBooks } from '@/constants'

const Home = () => {
  const randomNumber = Math.floor(Math.random() * (sampleBooks.length - 1))
  const relatedBook: Book = sampleBooks[randomNumber]

  return (
    <>
      <BookOverview {...relatedBook} />
      <BookList
        title='Latest Books'
        books={sampleBooks}
        containerClassName='mt-28'
      />
    </>
  )
}

export default Home
