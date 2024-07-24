import prisma from '@/app/lib/prisma'
import Link from 'next/link'
import Image from 'next/image'

export default async function UserLikes({ user }) {
    const data = await prisma.product.findMany({
        where: {
            liked: true
        }
    })
    
    return  data && data.length > 0 ?  (
        <div className="flex flex-col items-center w-full h-full">
            <h1 className='text-2xl font-bold text-center text-white'>{user.name}'s Liked Products</h1>
            <div className="w-full max-w-4xl mx-auto">
                <ul className="flex flex-wrap justify-center">
                    {data.map((item) => (
                        <li className="py-lg px-4 bg-white rounded-lg shadow-lg m-4" key={item.id}>
                            <Link href={`/shop/products/${item.id}`}>
                                <Image src={item.image} alt={item.name} width={200} height={200} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    ):
    (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-DarkBlue">
        <h1 className='text-2xl font-bold text-center text-white'>No products liked yet</h1>
    </div>
    );
}
