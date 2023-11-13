import Card from "../components/Card";
import useFetch from "../hooks/useFetch"
import gearLoad from "./assets/Gear-0.2s-264px.svg"

export default function Home({ url }) {
    const bookUrl = `${url}/books`
    const { data: books, loading } = useFetch(bookUrl)

    return (
        <>
            <div id="PAGE-HOME" className="p-3">
                <header className="pt-5 flex justify-center items-center">
                    <b>"Jadilah ninja seperti naruto, bukan beban seperti boruto" - Partai Wibu Perjuangan</b>
                </header>
                {loading ? (
                    <div className="mt-32 flex justify-center items-center">
                        <img src={gearLoad} />
                    </div>
                ) : (
                    <main className="grid grid-cols-3 gap-5 px-10 my-8 bg-base-100">
                        {books.map(book => {
                            return <Card key={book.id} book={book} url={url} />
                        })}
                    </main>
                )}
            </div >
        </>
    )
}