import WishlistCard from "../components/WishlistCard"
import gearLoad from "./assets/Gear-0.2s-264px.svg"
import useFetch from "../hooks/useFetch"

export default function Wishlist({ url }) {
    const wishUrl = `${url}/wishlist`
    const { data: wishlist, loading, fetchData: fetchWishlist } = useFetch(wishUrl)

    if (wishlist.length == 0) {
        return (
            <>
                <h1 className="mt-60 text-5xl flex justify-center items-center">You don't have any wishlist</h1>
            </>
        )
    }

    return (
        <>
            <>
                {loading ? (
                    <div className="mt-28 flex justify-center items-center">
                        <img src={gearLoad} />
                    </div>
                ) : (
                    <div id="PAGE-HOME" className="">
                        {/* main content */}
                        <main className="grid grid-cols-4 gap-5 px-10 my-8 bg-base-100">
                            {wishlist.map(wishlist => {
                                return <WishlistCard key={wishlist.id} wishlist={wishlist} fetchWishlist={fetchWishlist} url={url} />
                            })}
                        </main>
                    </div>
                )}

            </>
        </>
    )
}